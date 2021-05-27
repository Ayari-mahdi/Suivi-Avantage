import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { aneti_avg, brcod, Dataset, karama } from '../karama';
import { KaramaService } from '../karama.service';
import { loadingspinners } from '../loadings';

@Component({
  selector: 'app-karama-api',
  templateUrl: './karama-api.component.html',
  styleUrls: ['./karama-api.component.css']
})
export class KaramaApiComponent implements OnInit {
loadings=loadingspinners.spinner1;

  //horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  //verticalPosition: MatSnackBarVerticalPosition = 'top';
  totop=false;
  karama_list : Dataset[];
  aneti_avg:aneti_avg[];
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
  ) { this.data= new Dataset; 
    document.addEventListener('scroll',()=>{
      if(window.scrollY>350){
     
     this.totop=true
      }
      else{
        this.totop=false
      }
    })
  }



  ngOnInit(): void {
  // if(!this.svkarama.isUserLoggedIn())
 //  {
  //   this.router.navigate(['login']);
 //  }
 //  else {

console.log(loadingspinners.spinner1)
loadingspinners.spinner1= true;
console.log(loadingspinners.spinner1)
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

    this.svkarama.getaneti_avn().subscribe(
      (data) =>{  
                  
                 
                  this.aneti_avg=data;
                },
      (error)=>{  
                 
                    
      } 
    );
  //}
}


 
  
//search
onSubmit(){
  
    this.spin=true;
    console.log(this.data)
    // this.router.navigate(['/users',input.value]);   //  
    this.svkarama.search(this.data.TYPE_CONTRAT,this.data.BUR_COD,this.data.CIN ).subscribe(
    (dataa) => {    this.spin=false;
                    this.karama_list = dataa;
                     
                    console.log(this.karama_list);                               
                    },

    (error) => {   this.spin=false;
                   this._snackBar.open('user not found','dismiss' ,{
                   duration: 10000,panelClass:'red-snackbar'
                   });
                
                   });            
}

backtotop(){
  let top=document.getElementById('top');
  
  top.scrollIntoView({behavior:'smooth',block:'center'});
}
}
