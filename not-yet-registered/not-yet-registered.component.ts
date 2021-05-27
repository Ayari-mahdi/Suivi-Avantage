import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Dataset } from '../karama';
import { KaramaService } from '../karama.service';

@Component({
  selector: 'app-not-yet-registered',
  templateUrl: './not-yet-registered.component.html',
  styleUrls: ['./not-yet-registered.component.css']
})
export class NotYetRegisteredComponent implements OnInit {
  totop=false;
  karama_list : Dataset[];
  tokken:"";
  spin=false;
  search_icon=false;
  ano=false;
  constructor(
    private _snackBar: MatSnackBar,
    private svkarama:KaramaService,
    
    private router : Router,
  )
  {  document.addEventListener('scroll',()=>{
    if(window.scrollY>350){
   console.log("TEST");
   this.totop=true
    }
    else{
      this.totop=false
    }
  }) }

  ngOnInit(): void {

    this.spin=true;
   
    
    console.log(this.svkarama.isUserLoggedIn());
   this.svkarama.getnotyetrgegisteredlist().subscribe(
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
  }


  update(numero_affiliation:string,cin:string,typeavg:string){   
    this.spin=true 
    this.svkarama.update(numero_affiliation ,cin,typeavg).subscribe( 
    (res)   => { this.spin=false;
                this._snackBar.open('updated ','dismiss' ,{
                duration: 10000,panelClass:'snackbar'
                  });                 
             },
    (error) => { this.spin=false;
                 this._snackBar.open('update denied','dismiss' ,{
                 duration: 10000,panelClass:'red-snackbar'
                 });
             }
    );
  }


  updateall(){
    this.spin=true 
    this.svkarama.updateall().subscribe( 
      (res)   => { this.spin=false;    
        this._snackBar.open('updated ','dismiss' ,{
          duration: 10000,panelClass:'snackbar'
            });
          
               },
      (error) => { this.spin=false;  
       
            
               }
      );
  }




  backtotop(){
    let top=document.getElementById('top');
    
    top.scrollIntoView({behavior:'smooth',block:'center'});
  }
}
