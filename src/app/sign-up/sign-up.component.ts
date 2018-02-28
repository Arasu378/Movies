import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {RegisterService} from '../service/register.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  private emailString: string;
  private domainString: string;
  private firstNameString: string;
  private lastNameString: string;
  private companyNameString: string;
  private phoneString: string;
  rForm: FormGroup;
  private isSuccess: boolean;
  private message: string;
  constructor(private formBuilder: FormBuilder, private register: RegisterService, private router: Router,
               private dialog: MatDialog) {
    this.createSignInForm();
  }
  createSignInForm(): void {
    this.rForm = this.formBuilder.group({
        'email' : new FormControl(this.emailString, [Validators.required, Validators.email]),
        'domain' : new FormControl(this.domainString, [Validators.required, Validators.maxLength(20), Validators.minLength(4)]),
        'firstName' : new FormControl(this.firstNameString, [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
        'lastName' : new FormControl(this.lastNameString, [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
        'companyName' : new FormControl(this.companyNameString, [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
        'phone' : new FormControl(this.phoneString,
          [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]*')])

    });
  }


  ngOnInit() {
  }
  signUp(): void {
    this.initiateAPI();
  }
  getEmailErrorMessage() {
    return this.rForm.get('email').hasError('required') ? 'You must enter a email' :
      this.rForm.get('email').hasError('email') ? 'Not a valid email' :
        '';
  }
  getDomainErrorMessage() {
    return this.rForm.get('domain').hasError('required') ? 'you must enter domain' :
      this.rForm.get('domain').hasError('maxlength') ? 'you must not exceeds maximum 20 characters' :
        this.rForm.get('domain').hasError('minlength') ? 'you must enter minimum 4 characters' :
          '';
  }
  getFirstNameErrorMessage() {
    return this.rForm.get('firstName').hasError('required') ? 'you must enter first name' :
      this.rForm.get('firstName').hasError('maxlength') ? 'you must not exceeds maximum 20 characters' :
        this.rForm.get('firstName').hasError('minlength') ? 'you must enter minimum 4 characters' :
          '';
  }
 getLastNameErrorMessage() {
    return this.rForm.get('lastName').hasError('required') ? 'you must enter last name' :
      this.rForm.get('lastName').hasError('maxlength') ? 'you must not exceeds maximum 20 characters' :
        this.rForm.get('lastName').hasError('minlength') ? 'you must enter minimum 4 characters' :
          '';
  }
  getCompanyNameErrorMessage() {
    return this.rForm.get('companyName').hasError('required') ? 'you must enter company name' :
      this.rForm.get('companyName').hasError('maxlength') ? 'you must not exceeds maximum 20 characters' :
        this.rForm.get('companyName').hasError('minlength') ? 'you must enter minimum 4 characters' :
          '';
  }
 getPhoneErrorMessage() {
    return this.rForm.get('phone').hasError('required') ? 'you must enter phone' :
      this.rForm.get('phone').hasError('maxlength') ? 'you must not exceeds maximum 10 characters' :
        this.rForm.get('phone').hasError('minlength') ? 'you must enter minimum 10 characters' :
        this.rForm.get('phone').hasError('pattern') ? 'you must enter numbers' :
          '';
  }
initiateAPI(): void {
  this.register.registrationAPI(this.rForm.value)
    .subscribe(response => {console.log('response comp : ' + JSON.stringify(response));
    this.isSuccess =  response.isSuccess;
    this.message = response.message;
    if (this.isSuccess) {
      this.router.navigate(['users']);
    } else {
     this.openDialog();
    }
    },
      error2 => console.error('Error comp  : ' + error2));
}
openDialog(): void {

}


}
