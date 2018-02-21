import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-comp',
  templateUrl: './login-comp.component.html',
  styleUrls: ['./login-comp.component.css']
})
export class LoginCompComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  domain = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  hide = true;
  submitted = false;
  constructor() { }

  ngOnInit() {
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }
  getErrorPassword() {
    return this.password.hasError('required') ? 'You must enter password' :
      '';
  }
  getDomainError() {
    return this.domain.hasError('required') ? 'You must enter domain Name' :
      '';
  }
  loginClicked(): void {
    console.log('Email : ' + this.email + ' / domain: ' + this.domain + ' / password: ' + this.password);
  }
  onSubmit(): void {}

}
