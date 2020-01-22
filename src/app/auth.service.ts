import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from  '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isSubmitted  =  false;

  
  constructor(
    private router: Router
  ) {
    
   }
  login(){
    //localStorage.setItem('ACCESS_TOKEN', "access_token");
    this.isSubmitted  =  true;
    this.router.navigateByUrl('/home');

  }
  isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }
  logout(){
    //localStorage.removeItem('ACCESS_TOKEN');
    this.isSubmitted  =  false;
    this.router.navigateByUrl('/login');
  }

}
