import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  otpVerify: FormGroup;
  error: string | null = null;
  message: string | null = null;
  showLogin: boolean | null = true;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    (this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })),
      (this.otpVerify = this.fb.group({
        otp: ['', [Validators.required]],
      }));
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.error = 'Please fill in all required fields.';
      return;
    }

    const loginData = this.loginForm.value;
    this.http.post<any>('http://localhost:3000/api/login', loginData).subscribe(
      (response) => {
        if (response.status) {
          alert(response.message);
          this.showLogin = false;
        } else {
          alert(response.message);
        }
      },
      (error) => {
        alert(error.error.error);
        console.error('Error logging in:', error);
      }
    );
  }
  onOTPSubmit(): void {
    if (this.otpVerify.invalid) {
      this.error = 'Please fill in all required fields.';
      return;
    }
    const otp = this.otpVerify.value.otp;
    let email = this.loginForm.value.email;
    var objData = {
      email: email,
      enteredOtp: otp,
      type:"login"
    };
    this.http
      .post<any>('http://localhost:3000/api/verify-otp', objData)
      .subscribe(
        (response) => {
          if (response.status) {
            localStorage.setItem('token', response.token);
            alert(response.message);
            this.router.navigate(['/home']);
          }
        },
        (error) => {
          alert(error.error.message);
          console.error('Error logging in:', error);
        }
      );
  }
}
