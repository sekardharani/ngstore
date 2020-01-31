import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';
import { AuthService } from  '../auth.service';
import { BehaviorSubject, Observable } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(
    public authservice:AuthService,
    private router: Router
  ) { }

  ngOnInit() {
          
  }

 
  logoutbtn(){
    this.authservice.logout();
  }

}
