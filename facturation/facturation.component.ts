import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { facturation } from '../karama';
import { KaramaService } from '../karama.service';

@Component({
  selector: 'app-facturation',
  templateUrl: './facturation.component.html',
  styleUrls: ['./facturation.component.css']
})
export class FacturationComponent implements OnInit {
 factlist:facturation[];
 totop=false;
 numemp1:string;
 year:string;
 trim:string;
 //numemp="";
  constructor(
    private _snackBar: MatSnackBar,
    private svkarama:KaramaService,
    private router:Router,
  ) {document.addEventListener('scroll',()=>{
    if(window.scrollY>350){
 
   this.totop=true;
    }
    else{
      this.totop=false;
    }
  })
  
   }

  ngOnInit(): void {
   // if(!this.svkarama.isUserLoggedIn())
   // {
   //   this.router.navigate(['login']);
   // }
   // else {
  }
  onSubmit(){
   console.log(this.numemp1,this.year,this.trim)
    this.svkarama.factsearch(this.numemp1,this.year,this.trim).subscribe(
      (data) =>{  
        this.factlist = data  ;
        this._snackBar.open('done ','dismiss' ,{
          duration: 1200,panelClass:'snackbar'
            });          
            console.log("error")
       },
(error)        => { 
        console.log("error")
        this._snackBar.open('Employer dosnt exist','dismiss' ,{
        duration: 10000,panelClass:'red-snackbar'
         });
        }

    );

       }

//}
backtotop(){
  let top=document.getElementById('top');
  
  top.scrollIntoView({behavior:'smooth',block:'center'});
}
}
