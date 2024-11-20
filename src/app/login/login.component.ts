import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginData = {
    email: '',
    password: '',
   
  };
  errorMessage: any;
  rememberMe:boolean | undefined= false

  constructor(private authService: AuthService, private router: Router) {}


  onSubmit() {
    console.log('Login Data:', this.loginData);
  }

  onLogin() {
    this.authService.login(this.loginData.email, this.loginData.password).subscribe({
      next: () => {
        // Navigate to dashboard or other route on success
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        this.errorMessage = err.message;
      }
    });
  }
}
