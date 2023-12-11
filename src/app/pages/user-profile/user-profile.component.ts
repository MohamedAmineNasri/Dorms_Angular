import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(private router: Router,private authService: AuthenticationService) {}
  ngOnInit() {
    this.decodeTokenAndLog();
  }

  logout() {
    // Clear localStorage
    localStorage.clear();

    // Optionally, you can navigate to the login page or any other route
    this.router.navigate(['login']);
  }


  decodeTokenAndLog(): void {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = this.authService.decodeToken(token);
      console.log(decodedToken);
    } else {
      console.log('Token not found in localStorage');
    }
  }
}

