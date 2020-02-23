import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';
import { AuthService } from  '../../auth.service';
import { BehaviorSubject, Observable } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  loginMatch:any = false;
  isLoggedIn : Observable<boolean>;
  user:any= {'username':"","password":""}
  constructor(
    private authservice:AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    

  }

  login($event,loginForm) {
      $event.preventDefault();
      console.log(loginForm);

     this.user = {'username':loginForm.value.username,"password":loginForm.value.password}
     //console.log(this.user);
     //this.authservice.isLoggedIn(this.user).subscribe(
      this.authservice.isLoggedIn().subscribe(
       res => {
         console.log(res);
         res.find((o, i) => {
          if (o.username === loginForm.value.username && o.password === loginForm.value.password) {
              this.loginMatch = true;
              this.authservice.sendToken('loginallowed');
              this.router.navigate(["home"]);
              return true; // stop searching
          }

        });

        if(this.loginMatch == false){
          document.querySelector('.server-err').classList.remove('d-none')
          loginForm.reset();
          
          setTimeout(function(){
            document.querySelector('.server-err').classList.add('d-none');
          },2000);
        }
      
      
        // this.authservice.sendToken('loginallowed');
        // this.router.navigate(["home"]);
       },
       err =>{

       }
     )
     // this.authservice.sendToken('loginallowed');
     // this.router.navigate(["home"]);
    
  }
}
