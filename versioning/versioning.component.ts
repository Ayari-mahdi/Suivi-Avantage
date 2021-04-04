import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { aneti_avg, ws_aneti_historique } from '../karama';
import { KaramaService } from '../karama.service';
import { LoaderService } from '../loader/loader.service';

@Component({
  selector: 'app-versioning',
  templateUrl: './versioning.component.html',
  styleUrls: ['./versioning.component.css']
})
export class VersioningComponent implements OnInit {
  aneti_avg:aneti_avg[];
  historique_table:ws_aneti_historique[];
date_avantage1: string;
type_avantage1:string;
spin_versioning = false;
spin_data_importation:boolean ;
  constructor(
    private _snackBar: MatSnackBar,
    private svkarama:KaramaService,
    public loaderService: LoaderService
  ) { }


//************** */
  ngOnInit(): void {
    console.log(this.spin_data_importation);
    this.spin_versioning=true;
    console.log(this.spin_versioning)
    console.log(this.loaderService.isLoading);
    this.svkarama.getaneti_avn().subscribe(
      (data) =>{  
                  this.spin_versioning =false;
                  console.log(this.spin_versioning)
                  this.aneti_avg=data;
                },
      (error)=>{ 
                  this.spin_versioning=false;
                  console.log(this.spin_versioning)
                  console.log(error)
                  this._snackBar.open('access to api "type of advantages failed", check your connection please','dismiss' ,{
                  duration: 10000,panelClass:'red-snackbar'
                });      
      } 
    );
    
    this.svkarama.gethistorique().subscribe(
      (data2)=> {this.historique_table = data2;},
      (error2)=>{this._snackBar.open('access to api failed, check your connection please','dismiss' ,{
        duration: 10000,panelClass:'red-snackbar'
      });  

      }
    )
  }
//*************** */
getFileDetails (event) {
  for (var i = 0; i < event.target.files.length; i++) { 
    var name = event.target.files[i].name;
    var type = event.target.files[i].type;
    var size = event.target.files[i].size;
    var modifiedDate = event.target.files[i].lastModifiedDate;
    
    console.log ('Name: ' + name + "\n" + 
      'Type: ' + type + "\n" +
      'Last-Modified-Date: ' + modifiedDate + "\n" +
      'Size: ' + Math.round(size / 1024) + " KB");
  }}

onSubmit()
{ 
  this.spin_data_importation=true;
  console.log(this.date_avantage1,this.type_avantage1)
  this.svkarama.importanetiavg(this.date_avantage1,this.type_avantage1).subscribe(
    (dataa) => {  
                  this.spin_data_importation=false;  
                  this._snackBar.open('data importation done!','dismiss' ,{
                  duration: 2000,panelClass:'snackbar'
                  });
                    console.log(dataa);                               
                    },
    (error) => { 
                 this.spin_data_importation=false;
                 this._snackBar.open('data importation failed','dismiss' ,{
                 duration: 10000,panelClass:'red-snackbar'
                 });
                console.log(error);
                //this.ngOnInit();
                  });  
}
}
