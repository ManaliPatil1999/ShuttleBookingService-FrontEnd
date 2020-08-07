import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { Shuttledetails } from '../Shuttledetails';
import {ShuttleService} from "../shuttle.service"


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  Shuttledetails: Shuttledetails = new Shuttledetails();
  shuttledetails : Shuttledetails = {
    
    emp_id: null,
    emailId : null,
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
  submitted = false;
 
 
   bookingtype="";
   journey="";
   booking_for="";
  public companies= [{ comp : "KBL"}, { comp : "KEPL"}, {comp : "KMPL"},
              { comp: "KSL"}, { comp : "KCEL"}, { comp: "HMPL"}];

  public returntime = [{times: "6:15 AM"}, {times: "5:40 PM"}, {times: "4:30 PM"}]
  public depttimes = [{times: "6:15 AM"}, {times: "5:40 PM"}, {times: "4:30 PM"}]
  public boarding = [{bplace: "Yamuna"}, {bplace : "Udyog Bhavan"}, {bplace : "KOV"}]
  public retboarding = [{b1place: "Yamuna"}, {b1place : "Udyog Bhavan"}, {b1place : "KOV"}]
  public tours = [{type : "KOV to Pune"}, {type : "Pune to KOV"}]
  message:any;
  booking:any;
  CONFIRM = false;
  disabled= true;
  isRoundTrip= false;
  flag = false;
  constructor(private service: ShuttleService){}

  ngOnInit(): void {

  }

public bookingNow(){
  if(this.Shuttledetails.journey ==="Round-Trip"){
    this.flag = false;
  }else{
    this.flag = true;
    console.log(this.flag);
  }
  let resp=this.service.createBooking(this.Shuttledetails);
  resp.subscribe((data)=>this.message=data);
  this.submitted=true;
  
}
confirm(){
  //let resp=this.service.getUsers();
  //resp.subscribe((data)=>this.message=data)
  this.CONFIRM= true;
}
Enabled(){
  //document.getElementById("returntime").disabled = false;  
  this.isRoundTrip= true;                   
}

onTripChange(trip: String) {
  console.log("Selected Trip ", trip);
  this.service.setSelectedTrip(trip);
}

}
