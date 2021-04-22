import { Component, OnInit } from '@angular/core';
import { user } from '../../karama';
import { KaramaService } from '../../karama.service';

@Component({
  selector: 'app-cnss-agents',
  templateUrl: './cnss-agents.component.html',
  styleUrls: ['./cnss-agents.component.css']
})
export class CNSSAgentsComponent implements OnInit {
dataa:user[];
  constructor( private svkarama:KaramaService) {}

  ngOnInit(): void {
    this.svkarama.Testtab().subscribe(
      (dataa)=>{this.dataa=dataa,console.log(dataa),console.log(this.dataa)},
      (error)=>{console.log(error)});
  }

}
