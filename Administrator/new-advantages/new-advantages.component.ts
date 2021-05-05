import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-advantages',
  templateUrl: './new-advantages.component.html',
  styleUrls: ['./new-advantages.component.css']
})
export class NewAdvantagesComponent implements OnInit {
  closeResult='';
  constructor( private modalService : NgbModal,) { }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title',centered:true, scrollable: true }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      console.log('saved successfully');

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
  }

}
