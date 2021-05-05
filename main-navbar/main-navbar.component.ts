import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.css'],
  providers:[DatePipe],
})
export class MainNavbarComponent implements OnInit {
user=sessionStorage.getItem('username');
myDate = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
