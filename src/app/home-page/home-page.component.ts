import { Component, OnInit } from '@angular/core';
import {Router } from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  onBooking(){
    this.router.navigate(["/booking"]);
  }

  onCancel(){
    this.router.navigate(['/cancellation'])
  }

  onAvail(){
    this.router.navigate(['/view-avail'])
  }

  onReport(){
    this.router.navigate(['/monthly-report'])
  }

}
