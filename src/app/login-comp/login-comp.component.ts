import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../service/login.service';
import {Router} from '@angular/router';
import {UserDetails} from '../models/UserDetails';
import {LoginResponse} from '../models/LoginResponse';
import {StorageService} from '../storage/storage.service';

@Component({
  selector: 'app-login-comp',
  templateUrl: './login-comp.component.html',
  styleUrls: ['./login-comp.component.css']
})
export class LoginCompComponent implements OnInit {
  private emailString: string;
  private passwordString: string;
  private domainString: string;
  rForm: FormGroup;



  hide = true;
  submitted = false;
  private isSuccess: boolean;
  private userDetails: UserDetails;
  private loginResponse: LoginResponse;
  constructor(private loginService: LoginService, private router: Router,
              private storage: StorageService, private formBuilder: FormBuilder) {
    this.createLoginForm();
  }
  createLoginForm(): void {
    this.rForm =  this.formBuilder.group({
     'email' : new FormControl(this.emailString, [Validators.required, Validators.email]),
    'domain' : new FormControl(this.domainString, [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
    'password' : new FormControl(this.passwordString, [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
    });
  }

  ngOnInit() {
  }

  getErrorMessage() {
    return this.rForm.get('email').hasError('required') ? 'You must enter a email' :
      this.rForm.get('email').hasError('email') ? 'Not a valid email' :
        '';
  }
  getErrorPassword() {
    return this.rForm.get('password').hasError('required') ? 'You must enter password' :
      this.rForm.get('password').hasError('minlength') ? 'You must enter minimum 3 char' :
        this.rForm.get('password').hasError('maxlength') ? 'You must not exceed maximum 25' :
      '';
  }
  getDomainError() {
    return this.rForm.get('domain').hasError('required') ? 'You must enter domain Name' :
      this.rForm.get('domain').hasError('minlength') ? 'You must enter domain Name' :
        this.rForm.get('domain').hasError('maxlength') ? 'You must enter domain Name' :
      '';
  }

  onLogin(): void {
    this.loginService.loginAPI(this.rForm.value)
      .subscribe(response => this.loginResponse = response ,
        error2 => console.log('Error : ' + error2.value()),
        () => { this.validateResponse(); });
  }

  validateResponse(): void {
    this.isSuccess =  this.loginResponse.isSuccess;
    console.log('Login: ' + JSON.stringify(this.loginResponse));
      if ( this.isSuccess ) {
        if ( this.rForm.get('domain').valid ) {
          this.storage.setDomain(this.loginResponse.userDetails.idDomain);
        }
        if ( this.loginResponse.userDetails.token != null ) {
          this.storage.setToken(this.loginResponse.userDetails.token);
        }
        this.router.navigate(['users']);
      }
  }

}
