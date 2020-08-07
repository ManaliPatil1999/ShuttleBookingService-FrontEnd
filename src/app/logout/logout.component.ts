import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  invalidlogin = false;
  constructor( private authService : AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.logout();
    this.router.navigate(['./login']);

  }
  onLogOut(){
    this.invalidlogin = true;
  }
}
