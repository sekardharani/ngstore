import { Injectable } from '@angular/core';
import { Router } from  '@angular/router';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';



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
  register(data): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    let body = JSON.stringify({
      'username': data.username,
      'password': data.password,
      'lastname': data.lastname,
      'firstname': data.firstname
  });
    return this.http.post(this._loginUrl, body, httpOptions).pipe(
      map((response) => {
        console.log(response);
        alert('register sucessfully. click ok and login');
      }),
      // catchError(e)
      )
  }






}
