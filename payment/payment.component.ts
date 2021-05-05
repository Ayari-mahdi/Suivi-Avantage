import { DatePipe } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { aneti_avg, doss_avgass, employerdata, payresult } from '../karama';
import { KaramaService } from '../karama.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  providers:[DatePipe],
  styles: [`
  .light-blue-backdrop {
    background-color: red;
  }
`]
})
export class PaymentComponent implements OnInit {
x:string;
totop=false;
salaire:string;
paymentspin= false;
aneti_avg:aneti_avg[];
dossavgass:doss_avgass[];
payres:payresult;
newdata:employerdata;
myDate = new Date();
closeResult='';
  constructor(
  
    private _snackBar: MatSnackBar,
    private svkarama:KaramaService,
   
    private modalService : NgbModal,
    ) {this.newdata = new employerdata;
      document.addEventListener('scroll',()=>{
        if(window.scrollY>250){
       console.log("TEST");
       this.totop=true
        }
        else{
          this.totop=false
        }
      })
   }
   


   open(content,list) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title',centered:true,backdrop:"static",backdropClass:"light-blue-backdrop"}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      
      this.svkarama.addemployeesal(this.salaire,this.newdata.trim,this.newdata.year,this.newdata.type_avantage,list).subscribe(
        (dataa)=>{
          this._snackBar.open('salaire added successfully','dismiss' ,{
            duration: 10000,panelClass:'snackbar'
        }
      );
      console.log('saved successfully',this.salaire,list);
        },
        (error)=>{
          console.log(error);
          this._snackBar.open('check your connection please','dismiss' ,{
            duration: 10000,panelClass:'red-snackbar'
        }
      );
    })

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
   

  
    this.paymentspin=true;
    this.svkarama.getaneti_avn().subscribe(
      (data) =>{  
                  this.aneti_avg=data;
                  this.paymentspin=false;
                },
      (error)=>{  
                  
                  console.log(error);
                  this._snackBar.open('access failed, check your connection please','dismiss' ,{
                  duration: 10000,panelClass:'red-snackbar'
                }); 
                this.paymentspin=false;     
      } 
    );

  }

  onSubmit(){
    this.paymentspin=true;
    this.svkarama.getemployeelist(this.newdata.numaf,this.newdata.trim,this.newdata.year).subscribe(
      (dataa)=>{
         this.dossavgass = dataa;
         this.paymentspin=false;
      },
      (error)=>{
        console.log(error);
        this._snackBar.open('check your connection please','dismiss' ,{
          duration: 10000,panelClass:'red-snackbar'
      }
    );
    this.paymentspin=false;
  })}

  calculate(){
    
    this.svkarama.calculatetotalsum(this.newdata.numaf,this.newdata.trim,this.newdata.year,this.newdata.type_avantage).subscribe(
    (dataaa)=>{ 
              this.payres=dataaa;
              console.log(this.payres);
    },
    (error)=>{
              console.log(error);
              this._snackBar.open('check your connection please','dismiss' ,{
              duration: 10000,panelClass:'red-snackbar'});
            }

    )
  }
  backtotop(){
    let top=document.getElementById('top');
   
    top.scrollIntoView({behavior:'smooth',block:'center'});
  }



}
