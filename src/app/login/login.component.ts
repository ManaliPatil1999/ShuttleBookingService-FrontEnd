import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  username="manali123"
  password = "manali123"
  invalidLogin = false

  constructor(public router: Router, private loginService : AuthService ) { }

  ngOnInit() {
      }

  onLogin(){
    if(this.loginService.authenticate(this.username, this.password))
    {
      this.router.navigate(['/home-page'])
      this.invalidLogin= false
    }
    else{
      this.invalidLogin= true
    }
    
  }

}
