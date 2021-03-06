import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../../auth.service'
import { Router } from  '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private authservice: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { 
    return this.registerForm.controls;
   }

  onSubmit() {
    this.submitted = true;    
    if (this.registerForm.invalid) {
      return;
    }
    const register = {
      username: this.registerForm.controls.userName.value,
      firstname: this.registerForm.controls.firstName.value,
      lastname: this.registerForm.controls.lastName.value,
      password: this.registerForm.controls.password.value
    }

    this.authservice.register(register).subscribe((result) => {
      // This code will be executed when the HTTP call returns successfully 
      this.router.navigate(["login"]);
    });
  }
}
