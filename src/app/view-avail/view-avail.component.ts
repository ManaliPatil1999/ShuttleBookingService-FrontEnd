import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Router } from "@angular/router"
import { Shuttledetails } from '../Shuttledetails';
import { Observable } from 'rxjs';
import { ShuttleService } from '../shuttle.service';

@Component({
  selector: 'app-view-avail',
  templateUrl: './view-avail.component.html',
  styleUrls: ['./view-avail.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ViewAvailComponent implements OnInit {
  shuttles: Observable<Shuttledetails[]>

  booking: any;
  @Input() deptdate: Date;
  @Input() retdate: Date;

  Shuttledetails: Shuttledetails = new Shuttledetails();
  shuttledetails: Shuttledetails = {

    emp_id: null,
    emailId: " ",
    emp_sector: null,
    emp_name: null,
    rettime: null,
    dept: null,
    booking_date: null,
    deptdate: null,
    depttime: null,
    boarding_place: null,
    booking_for: null,
    emergencyNo: null,
    mobile: null,
    status: null,
    srNo: null,
    startdate: null,
    enddate: null,
    company: null,
    booking_id: null,
    bookingtype: null,
    return_boarding: null,
    tourtype: null,
    remark: null,
    retdate: null,
    active: false,
    journey: null
  };

  public depttimes = [{ time: "6:15 AM" }, { time: "5:40 PM" }, { time: "4:30 PM" }]
  public tours = [{ type: "KOV to Pune" }, { type: "Pune to KOV" }]
  selectedTrip: any;

  constructor(private service: ShuttleService,
    private router: Router) {
    this.service.selectedTrip$.subscribe(trip => this.selectedTrip = trip);
    console.log("SelectedTrip", this.selectedTrip);
    console.log("subscribe selectedTrip", this.selectedTrip)
    if(!this.selectedTrip){
      const trip = sessionStorage.getItem("selectedTrip");
      console.log("session storage trip", trip);
      this.selectedTrip = trip;
    }
  }


  ngOnInit() {
    console.log("ngOnInit called Shuttledetails", this.Shuttledetails);
  }


  public getByDateTypeAndTime() {
    console.log("getByDateTypeAndTime called Shuttledetails", this.Shuttledetails);
    let date: any;
    let time: any;
    let boarding_place: any;
    let totype: any;
    if (this.selectedTrip === "single") {
      console.log("if success");
      date = this.Shuttledetails.deptdate;
      time = this.Shuttledetails.depttime;
      totype = this.Shuttledetails.tourtype;
      boarding_place = this.Shuttledetails.boarding_place;
      this.service.getBookingsByDateAndTimeAndTourtype(date, totype, time)
      .subscribe((data) => this.booking = data)
    } else if (this.selectedTrip === "round") {
      console.log("else if success");
      date = this.Shuttledetails.deptdate;
      time = this.Shuttledetails.depttime;
      totype = this.Shuttledetails.tourtype;
      boarding_place = this.Shuttledetails.return_boarding;
      this.service.getBookingsByDateAndTimeAndTourtypeReturn(date, totype, time)
      .subscribe((data) => this.booking = data)

    }
  }
  /*
  public getByDateTypeAndTimeReturn(){
   let resp=this.service.getBookingsByDateAndTimeAndTourtypeReturn
   (this.Shuttledetails.retdate, this.Shuttledetails.tourtype, this.Shuttledetails.rettime);
   resp.subscribe((data)=> this.booking=data)
 
  }
*/


}

