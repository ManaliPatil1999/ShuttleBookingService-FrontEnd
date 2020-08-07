import { Component, OnInit , Input} from '@angular/core';
import { ShuttleService } from '../shuttle.service';
import {Shuttledetails} from '../Shuttledetails';

@Component({
  selector: 'app-monthly-report',
  templateUrl: './monthly-report.component.html',
  styleUrls: ['./monthly-report.component.css']
})
export class MonthlyReportComponent implements OnInit {

  booking: any;
  returntrip: any;
  @Input() startdate: Date;
  @Input()  enddate: Date;
  

  
  Shuttledetails: Shuttledetails = new Shuttledetails();
  shuttledetails : Shuttledetails = {
    
    emp_id: null,
    emailId : " ",
    emp_sector: null,
    emp_name : null,
    dept: null,
    srNo: null,
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
    booking_id: null,
    bookingtype: null,
    return_boarding: null,
    tourtype: null,
    remark: null,
    retdate: null,
    rettime: null,
    active: false,
    journey: null
  };
  display= false;
  bookingtype="";
  tours = [{type : "KOV to Pune"}, {type : "Pune to KOV"}]
  companies = [{val:1, comp : "KBL"}, {val:2, comp : "KEPL"}, {val:3,comp : "KMPL"},
  {val:4, comp: "KSL"}, {val:5, comp : "KCEL"}, {val:6, comp: "HMPL"}];

  constructor(private service: ShuttleService) { 
 
  }

  ngOnInit(): void {
  }
  public getByDeptDates(){   
    let resp = this.service.getBookingsByBookingtypeTourtypeCompanyAndDeptdateBetween
    ( this.Shuttledetails.bookingtype, this.Shuttledetails.tourtype, this.Shuttledetails.company, 
      this.Shuttledetails.startdate, this.Shuttledetails.enddate);
    resp.subscribe((data)=> this.booking=data)
    this.display=true;
  }

  public getByRetDates(){  
    let resp = this.service.getBookingsByBookingtypeTourtypeCompanyAndRetdateBetween
    ( this.Shuttledetails.bookingtype, this.Shuttledetails.tourtype, this.Shuttledetails.company, 
      this.Shuttledetails.startdate, this.Shuttledetails.enddate);
    resp.subscribe((data)=> this.returntrip=data)
    this.display=true;
  }
}
