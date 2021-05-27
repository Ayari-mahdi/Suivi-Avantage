import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Dataset } from '../karama';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
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
  closeResult='';
  search_icon=false;
  emailbody:string;
  
  constructor(
    private modalService : NgbModal,
    private _snackBar: MatSnackBar,
    private svkarama:KaramaService,
            )

   { document.addEventListener('scroll',()=>{
    if(window.scrollY>350){
   this.totop=true
    }
    else{
      this.totop=false
    }
      }) 
  }



  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title',centered:true, scrollable: true }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this._snackBar.open('email sent successfully','dismiss' ,{
                duration: 10000,panelClass:'snackbar'
          }
         );
      this.svkarama.sendemail(this.emailbody).subscribe(
        (dataa)=>{
          this._snackBar.open('email sent successfully','dismiss' ,{
            duration: 10000,panelClass:'snackbar'
      }
      );
  
        },
        (error)=>{
          this._snackBar.open('check your connection please','dismiss' ,{
            duration: 10000,panelClass:'red-snackbar'
        }
      );

    }
   )

    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
   }
   private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } 
    else {
      return `with: ${reason}`;
    }
  }
 

ngOnInit(): void {
    this.spin=true;
   
    
    console.log(this.svkarama.isUserLoggedIn());
   this.svkarama.getfaultylist().subscribe(
       (t) =>{  
                   this.search_icon=true;
                   this.spin=false;
                   this.karama_list = t  ;
                   this._snackBar.open('done ','dismiss' ,{
                     duration: 1200,panelClass:'snackbar'
                       });
                  
                  },
       (error)        => { 
                   this.search_icon=false;
                   this.spin=false;
                   this._snackBar.open('access denied , check your connection','dismiss' ,{
                   duration: 10000,panelClass:'red-snackbar'
                    });
                  
                   }
              );

  }
  backtotop(){
    let top=document.getElementById('top');
    
    top.scrollIntoView({behavior:'smooth',block:'center'});
  }
}
