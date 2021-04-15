import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-firstcomp',
  templateUrl: './firstcomp.component.html',
  styleUrls: ['./firstcomp.component.css']
})
export class FirstcompComponent implements OnInit {
  tokken:"";

  constructor(private routeparam: ActivatedRoute,) { }

  ngOnInit(): void {
    
    this.routeparam.queryParams.subscribe(params => {
        this.tokken = params['jwt'];
         console.log(this.tokken);

  })

}
}
