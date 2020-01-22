import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';
import { AuthService } from  '../auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  show: boolean;
  constructor(
    private authservice:AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.show = this.authservice.isSubmitted;
  }

 
  logoutbtn(){
    this.authservice.logout();
  }

}
