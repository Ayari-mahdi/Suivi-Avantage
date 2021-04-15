import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { brcod, Dataset, karama } from '../karama';
import { KaramaService } from '../karama.service';

@Component({
  selector: 'app-karama-api',
  templateUrl: './karama-api.component.html',
  styleUrls: ['./karama-api.component.css']
})
export class KaramaApiComponent implements OnInit {
  karama_list : Dataset[];
  data: Dataset;
  data2:Dataset[];
  brcod:brcod[];
  tokken:"";
  spin=false;
  search_icon=false;
  ano=false;
  constructor(
    private _snackBar: MatSnackBar,
    private svkarama:KaramaService,
    private routeparam: ActivatedRoute,
    private router : Router,
  ) { this.data= new Dataset; }



  ngOnInit(): void {
   if(!this.svkarama.isUserLoggedIn())
   {
     this.router.navigate(['login']);
   }
   else {
    
    this.spin=true;
    
         console.log(this.svkarama.isUserLoggedIn());
        this.svkarama.getkaramalist().subscribe(
            (karamaa_list) =>{  
                        this.search_icon=true;
                        this.spin=false;

                        this.karama_list = karamaa_list  ;
                        this._snackBar.open('done ','dismiss' ,{
                          duration: 1200,panelClass:'snackbar'
                            });
                        console.log(this.karama_list);
                       },
            (error)        => { 
                        this.search_icon=false;
                        this.spin=false;
                        this._snackBar.open('access denied , check your connection','dismiss' ,{
                        duration: 10000,panelClass:'red-snackbar'
                         });
                        console.log(error);
                        }
                   );
                  
                   

    this.svkarama.getbrcod().subscribe(
      (brcod) =>{ 
                  this.brcod=brcod;
                },
      (error)=>{        

                } 
    );
  }}


  update(numero_affiliation:string,cin:string){   
    this.spin=true 
    console.log(numero_affiliation);
    console.log(cin);
    this.svkarama.update(numero_affiliation ,cin).subscribe( 
    (res)   => { this.spin=false;
                this._snackBar.open('updated ','dismiss' ,{
                duration: 10000,panelClass:'snackbar'
                  });
                console.log(res);
                 
             },
    (error) => { this.spin=false;
                 this._snackBar.open('update denied','dismiss' ,{
                 duration: 10000,panelClass:'red-snackbar'
                 });
               console.log(error);
             }
    );
  }
  
//search
onSubmit(){

    this.spin=true;
    console.log(this.data)
    // this.router.navigate(['/users',input.value]);   //  
    this.svkarama.search(this.data.BUR_COD,this.data.NUMERO_AFFILIATION,this.data.CIN,this.data.TYPE_AVANTAGE ).subscribe(
    (dataa) => {    this.spin=false;
                    this.karama_list = dataa;
       
                    console.log(this.karama_list);                               
                    },

    (error) => {   this.spin=false;
                   this._snackBar.open('user not found','dismiss' ,{
                   duration: 10000,panelClass:'red-snackbar'
                   });
                   this.ngOnInit();
                   });            
}

listing(){
  this.ano=false;
  
}
beneficiaire(){
///////////
}
anomalie(){
/////////////
  this.ano=true;
}
}
