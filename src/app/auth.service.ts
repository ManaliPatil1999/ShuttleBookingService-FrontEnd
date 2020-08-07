import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  username : any;
  password : any;

  constructor() { }

  authenticate(username, password){
    if(username==="manali123" && password==="manali123"){
      sessionStorage.setItem('username', username)
      return true;
    }
    else{
      return false;
    }
  }
  

  isUserLoggedIn(){
    let user=sessionStorage.getItem('username')
    // console.log(!(user === null))
    return !(user===null)
  }

  public logout(){
    sessionStorage.removeItem('username')
    
  }
  
}