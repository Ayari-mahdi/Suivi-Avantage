import { Component, OnInit } from '@angular/core';
import { user } from '../../karama';
import { KaramaService } from '../../karama.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { MatSnackBar } from '@angular/material/snack-bar';
import { fade } from '../../animations';

@Component({
  selector: 'app-cnss-agents',
  templateUrl: './cnss-agents.component.html',
  styleUrls: ['./cnss-agents.component.css'],
  animations:[
    fade
  ]
 
})
export class CNSSAgentsComponent implements OnInit {
dataa:user[];
user:user;
spinregister: boolean;
  closeResult='';
  constructor(
    private modalService2 : NgbModal,
    private modalService : NgbModal,
    private svkarama:KaramaService,
  
    private _snackBar: MatSnackBar,
    ) {
   }
   open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title',centered:true, scrollable: true }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
     

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
///////
open2(content) {
  this.modalService2.open(content, {ariaLabelledBy: 'modal-basic-title',centered:true, scrollable: true }).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
   

  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
 }

////
  ngOnInit(): void {
   
  }
  onSubmit(){

   
    // this.router.navigate(['/users',input.value]);   //  
    console.log(this.user);
    this.svkarama.register(this.user).subscribe(
    (dataa) => {   this._snackBar.open('agent registred successfully ','dismiss' ,{
                    duration: 10000,panelClass:'green-snackbar'
                     });
                },
    (error) => {   this.spinregister=false;
                   this._snackBar.open('username exist already ','dismiss' ,{
                   duration: 10000,panelClass:'red-snackbar'
                   });
                  
                 });            
  }


}
