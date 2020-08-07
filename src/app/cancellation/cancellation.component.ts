import { Component, OnInit, Input } from '@angular/core';
import { ShuttleService } from '../shuttle.service';
import {Shuttledetails} from "../Shuttledetails";


@Component({
  selector: 'app-cancellation',
  templateUrl: './cancellation.component.html',
  styleUrls: ['./cancellation.component.css'],
   
})
export class CancellationComponent implements OnInit {
  booking : any;
  @Input() deptdate : Date;
  booking_id : Number;

  Shuttledetails: Shuttledetails = new Shuttledetails();
  shuttledetails : Shuttledetails = {
    
    emp_id: null,
    emailId : " ",
    emp_sector: null,
    emp_name : null,
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
    startdate: null,
    enddate: null,
    company: null,
    srNo: null,
    booking_id: null,
    bookingtype: null,
    return_boarding: null,
    tourtype: null,
    remark: null,
    retdate: null,
    active: false,
    journey: null
  };
  display= false;
  delete= false;
  selectedTrip: any;

  constructor(private service : ShuttleService) {
    this.service.selectedTrip$.subscribe(trip => this.selectedTrip = trip);
    console.log("SelectedTrip", this.selectedTrip);
    console.log("subscribe selectedTrip", this.selectedTrip)
    if(!this.selectedTrip){
      const trip = sessionStorage.getItem("selectedTrip");
      console.log("session storage trip", trip);
      this.selectedTrip = trip;
    }
  }
  
  ngOnInit(){
   
  }

  public deleteBooking(booking_id : number){
    let res=this.service.cancelBooking(booking_id)
    res.subscribe((data)=> this.booking = data)
    this.delete=true;

    
  }
  public getByDate(){
    console.log("getByDate called Shuttledetails", this.Shuttledetails);
    let date: any;    
    if (this.selectedTrip === "single") {
      console.log("if success");
      date = this.Shuttledetails.deptdate; 
      this.service.getBookingsByDeptdate(date).subscribe((data)=> this.booking=data)
      this.display=true; 
    } else  if (this.selectedTrip === "round") {
      console.log("else if success");
      date = this.Shuttledetails.deptdate;  
      this.service.getBookingsByRetdate(date).subscribe((data)=> this.booking=data) 
      this.display=true; 
    }

    //console.log("Test", this.Shuttledetails.deptdate);
    
  }
  
 

}
