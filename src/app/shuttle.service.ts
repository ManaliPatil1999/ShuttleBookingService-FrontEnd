import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShuttleService {

  private selectedTrip = new BehaviorSubject(' ');
  selectedTrip$ = this.selectedTrip.asObservable();

  constructor(private http: HttpClient) { }

  setSelectedTrip(trip : any) {
    this.selectedTrip.next(trip);
    sessionStorage.setItem('selectedTrip', trip);
  }

  public createBooking(Shuttledetails) {
    return this.http.post("http://localhost:8080/api/v1/bookings", Shuttledetails,
     { responseType: "text" as "json" });

  }

  public getBookingsByDeptdate(deptdate): Observable<any> {
    return this.http.get("http://localhost:8080/api/v1/cancel/single/" + deptdate);
  }

  public getBookingsByRetdate(retdate): Observable<any> {
    return this.http.get("http://localhost:8080/api/v1/cancel/round/" + retdate);
  }

  public getBookingsByDateAndTimeAndTourtype(deptdate,tourtype, depttime) {
    console.log("single trip success");
    return this.http.get("http://localhost:8080/api/v1/availability/single/" + deptdate + "/" + tourtype + "/" + depttime);
  }
  
    public getBookingsByDateAndTimeAndTourtypeReturn(retdate, tourtype, rettime){
      return this.http.get("http://localhost:8080/api/v1/availability/round/"+retdate+"/"+tourtype+"/"+rettime);
    }
  
  public cancelBooking(booking_id): Observable<any> {
    return this.http.delete("http://localhost:8080/api/v1/cancel/" + booking_id);
  }

  public getUsers() {
    return this.http.get("http://localhost:8080/api/v1/getAllUsers");
  }

  public getBookingsByBookingtypeTourtypeCompanyAndDeptdateBetween(bookingtype, tourtype, company, startdate, enddate) {
    return this.http.get("http://localhost:8080/api/v1/booking/single/" + bookingtype + "/" + tourtype + "/" + company + "/" + startdate + "/" + enddate);
  }

  public getBookingsByBookingtypeTourtypeCompanyAndRetdateBetween(bookingtype, tourtype, company, startdate, enddate) {
    return this.http.get("http://localhost:8080/api/v1/booking/round/" + bookingtype + "/" + tourtype + "/" + company + "/" + startdate + "/" + enddate);
  }
}
