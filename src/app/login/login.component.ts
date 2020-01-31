import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';
import { AuthService } from  '../auth.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  isLoggedIn : Observable<boolean>;

  constructor(
    private authservice:AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    

  }

  login($event) {
      $event.preventDefault();
      console.log($event);
      this.authservice.sendToken('loginallowed');
      this.router.navigate(["home"]);
    
  }
}
