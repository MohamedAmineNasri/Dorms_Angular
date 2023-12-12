import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {JwtHelperService} from "@auth0/angular-jwt";
import {RegisterRequest} from "../models/register-request";
import {AuthenticationResponse} from "../models/authentication-response";
import {AuthenticationRequest} from "../models/authentication-request";
import {VerificationRequest} from "../models/verification-request";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl: string = 'http://localhost:8089/api/auth';
  helper = new JwtHelperService();


  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
  ) {}
  register(
    registerRequest: RegisterRequest
  ):Observable<object> {
    return this.http.post<AuthenticationResponse>(`${this.baseUrl}/register`,registerRequest)
  }
  login(
    authRequest: AuthenticationRequest
  ):Observable<object> {
    return this.http.post<AuthenticationResponse>(`${this.baseUrl}/authenticate`,authRequest)
  }

  verifyCode(VerificationRequest: VerificationRequest) {
    return this.http.post<AuthenticationResponse>(`${this.baseUrl}/verifiy`,VerificationRequest)
  }

  decodeToken(token: string): any {
    try {
      return this.jwtHelper.decodeToken(token);
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }

  checkAuthentication(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }


}
