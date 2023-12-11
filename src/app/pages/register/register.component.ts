import { Component, OnInit } from '@angular/core';
import {AuthenticationResponse} from "../../models/authentication-response";
import {VerificationRequest} from "../../models/verification-request";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";
import {RegisterRequest} from "../../models/register-request";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  {

  registerRequest: RegisterRequest = {};
  authResponse: AuthenticationResponse = {};
  message = '';
  otpCode = '';

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {
  }

  registerUser() {
    this.message = '';
    this.authService.register(this.registerRequest)
      .subscribe({
        next: (response) => {
          if (response) {
            this.authResponse = response;
          } else {
            // inform the user
            this.message = 'Account created successfully\nYou will be redirected to the Login page in 3 seconds';
            setTimeout(() => {
              this.router.navigate(['login']);
            }, 3000)
          }
        }
      });

  }

  verifyTfa() {
    this.message='';
    const verifyRequest: VerificationRequest = {
      email:this.registerRequest.email,
      code:this.otpCode
    };
    this.authService.verifyCode(verifyRequest)
      .subscribe({
        next: (response: AuthenticationResponse) => {
          this.message = 'Account created successfully\nYou will be redirected to the login page 3 seconds'
          setTimeout(()=> {
            localStorage.setItem('token',response.accessToken as string);
            this.router.navigate(['login']);
          }, 3000);
        }
      })
  }
}
