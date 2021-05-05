import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Dataset } from '../karama';
import { KaramaService } from '../karama.service';

@Component({
  selector: 'app-faulty-data',
  templateUrl: './faulty-data.component.html',
  styleUrls: ['./faulty-data.component.css']
})
export class FaultyDataComponent implements OnInit {
  totop=false;
  karama_list : Dataset[];
  tokken:"";
  spin=false;
  search_icon=false;
  
  constructor(
    private _snackBar: MatSnackBar,
    private svkarama:KaramaService,
    
    private router : Router,
  )
   { document.addEventListener('scroll',()=>{
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
   this.svkarama.getfaultylist().subscribe(
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
  backtotop(){
    let top=document.getElementById('top');
    
    top.scrollIntoView({behavior:'smooth',block:'center'});
  }
}
