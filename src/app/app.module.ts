import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ShuttleService} from "./shuttle.service";

import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Shuttledetails } from './Shuttledetails';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
   
  ],
  exports: [RouterModule],
  providers: [Shuttledetails, AuthService, ShuttleService],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
