import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { KaramaService } from '../karama.service';
import { ws_aneti_historique } from '../karama';
@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.css'],
  providers:[DatePipe],
})
export class MainNavbarComponent implements OnInit {
user=sessionStorage.getItem('username');
myDate = new Date();
bottomscrollbar=false;
historique_table:ws_aneti_historique[];
  constructor(  private _snackBar: MatSnackBar,
    private svkarama:KaramaService,) { }

  ngOnInit(): void {
    this.svkarama.gethistorique().subscribe(
      (data2)=> {this.historique_table = data2;
        this.historique_table.forEach(item=>{
          if(item.number===1){
        this.bottomscrollbar=true;
          }
        })
                  },
      (error2)=>{

                }
              )
  
  }


}
