import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ViewAvailComponent} from './view-avail/view-avail.component';
import { BookingComponent } from './booking/booking.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { CancellationComponent } from './cancellation/cancellation.component';
import { MonthlyReportComponent } from './monthly-report/monthly-report.component';
import { LogoutComponent } from './logout/logout.component';

import { AuthGuard} from './auth.guard';



const routes: Routes = [
  {path: 'view-avail', component: ViewAvailComponent, canActivate: [AuthGuard]},
  {path : 'booking', component: BookingComponent, canActivate:[AuthGuard]},
  {path: 'home-page', component: HomePageComponent, canActivate:[AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'cancellation', component: CancellationComponent, canActivate:[AuthGuard]},
  {path: 'monthly-report', component: MonthlyReportComponent, canActivate:[AuthGuard]},

  {path: 'logout', component: LogoutComponent, canActivate:[AuthGuard]},
  { path: '', pathMatch: 'full', redirectTo: 'login'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [ViewAvailComponent, BookingComponent, HomePageComponent, 
  LoginComponent, CancellationComponent, MonthlyReportComponent, LogoutComponent]
