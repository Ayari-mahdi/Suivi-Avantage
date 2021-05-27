import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {IDropdownSettings} from 'ng-multiselect-dropdown';
import { animate, style, transition, trigger } from '@angular/animations';
import { fade } from '../../animations';

@Component({
  selector: 'app-cnss-agents-roles',
  templateUrl: './cnss-agents-roles.component.html',
  styleUrls: ['./cnss-agents-roles.component.css'],
  animations:[
    fade
  ]
})
export class CNSSAgentsRolesComponent implements OnInit {
  closeResult='';
  dropdownList = [];
  selectedItems = [];
  dropdownSettings:IDropdownSettings;
  constructor( private modalService : NgbModal,
    private modalService2 : NgbModal,
    ) { }
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
  open2(content) {
    this.modalService2.open(content, {ariaLabelledBy: 'modal-basic-title',centered:true, scrollable: true }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      console.log('saved successfully');

    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
   }
  ngOnInit(): void {
    this.dropdownList = [
      {item_text: 'listing' },
      {item_text: 'anomalies' },
      {item_text: 'beneficiaires' },
      {item_text: 'versioning' },
      {item_text: 'paiement' },
      {item_text: 'facturation' },
      {item_text: 'charts' },
      {item_text: 'adminprivileges'}
    ];
    this.selectedItems = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' }
    ];
    this.dropdownSettings= {
      singleSelection: false,
      idField: 'item_text',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 8,
      allowSearchFilter: true
    };
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
}
