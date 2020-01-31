import { Injectable } from '@angular/core';
import { Router } from  '@angular/router';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private _loginUrl = "https://dsinzstore.herokuapp.com/member";

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    
   }

  sendToken(token: string) {
    localStorage.setItem("LoggedInUser", token)
  }
  getToken() {
    return localStorage.getItem("LoggedInUser")
  }
  isLogged() {
    return this.getToken() !== null;
  }
  //isLoggedIn(user) {
    isLoggedIn() {    
    //return this.getToken() !== null;
    //return this.http.post<any>(this._loginUrl, user)
    return this.http.get<any>(this._loginUrl)
  }
  logout() {
    localStorage.removeItem("LoggedInUser");
    this.router.navigate(["login"]);
  }






}
