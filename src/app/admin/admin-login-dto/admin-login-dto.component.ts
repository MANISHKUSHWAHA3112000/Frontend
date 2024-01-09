import { Component } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-admin-login-dto',
  templateUrl: './admin-login-dto.component.html',
  styleUrls: ['./admin-login-dto.component.css']
})
export class AdminLoginDtoComponent {

  model: any = {}; // Declare an object to hold form values

  constructor(private adminService: AdminService, private router: Router) { }

  onSubmit() {
    this.adminService.loginAdmin(this.model).subscribe(
      (response: any) => {
        // Check if the response is JSON
        if (response instanceof Object) {
          // Handle successful JSON response
          console.log('Login successful');
          // Redirect to the admin dashboard or any other page
          this.router.navigate(['/admin/dashboard']);
        } else if (typeof response === 'string') {
          // Handle successful plain text response
          console.log(response);
          // Redirect to the admin dashboard or any other page
          this.router.navigate(['/admin/dashboard']);
        } else {
          // Handle unexpected response format
          console.error('Unexpected response format:', response);
        }
      },
      (error) => {
        // Handle login errors
        console.error('Login failed:', error);
  
        if (error instanceof HttpErrorResponse) {
          console.log('Status Code:', error.status);
          console.log('Response Body:', error.error);
        }
  
        // You can display an error message to the user based on the error status or message
      }
    );
  }
  
}  
