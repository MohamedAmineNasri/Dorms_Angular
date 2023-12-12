import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserRoleGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    // Check if token is present
    const token = localStorage.getItem('token');
    if (!token) {
      // If token is not present, navigate to the login page
      this.router.navigate(['login']);
      return false;
    }

    const userRole = this.getUserRoleFromToken(token);

    if (userRole !== 'USER') {
      // If user role is not 'USER', navigate to a forbidden page or handle it as needed
      this.router.navigate(['dashboard']);
      return false;
    }

    // If token is present and user role is 'USER', allow navigation
    return true;
  }

  // This method should be modified based on your token structure to extract the user role
  private getUserRoleFromToken(token: string): string | null {
    try {
      // Modify this logic based on your token structure
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      return decodedToken.role || null;
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }
}
