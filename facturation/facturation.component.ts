import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { facturation } from '../karama';
import { KaramaService } from '../karama.service';

@Component({
  selector: 'app-facturation',
  templateUrl: './facturation.component.html',
  styleUrls: ['./facturation.component.css']
})
export class FacturationComponent implements OnInit {
 //factlist=facturation[];
  constructor(
    private _snackBar: MatSnackBar,
    private svkarama:KaramaService,
  ) { }

  ngOnInit(): void {
    this.svkarama.getfact().subscribe(
      //factlist
    )

  }

}
