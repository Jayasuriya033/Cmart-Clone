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
  userEmail : string = ''

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
    let value = this.loginForm.value.email;
    let password = this.loginForm.value.password;
    var loginData = {
      value: value,
      password: password
    };
    
    this.http.post<any>('http://localhost:3000/api/login', loginData).subscribe(
      (response) => {
        if (response.status) {
          this.userEmail = response.email;
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
    // let email = this.loginForm.value.email;
    var objData = {
      email: this.userEmail,
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
            this.router.navigate(['/select']);
          }
        },
        (error) => {
          alert(error.error.message);
          console.error('Error logging in:', error);
        }
      );
  }
}



// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css'],
// })
// export class LoginComponent implements OnInit {
//   loginForm: FormGroup;
//   otpVerify: FormGroup;
//   error: string | null = null;
//   message: string | null = null;
//   showLogin: boolean | null = true;
//   userEmail: string = '';

//   constructor(
//     private fb: FormBuilder,
//     private http: HttpClient,
//     private router: Router
//   ) {
//     (this.loginForm = this.fb.group({
//       email: ['', [Validators.required]],
//       password: ['', [Validators.required]],
//     })),
//       (this.otpVerify = this.fb.group({
//         otp: ['', [Validators.required]],
//       }));
//   }

//   ngOnInit(): void {}

//   onSubmit(): void {
//     if (this.loginForm.invalid) {
//       this.error = 'Please fill in all required fields.';
//       return;
//     }
//     let value = this.loginForm.value.email;
//     let password = this.loginForm.value.password;
//     var loginData = {
//       value: value,
//       password: password,
//     };

//     this.http.post<any>('http://localhost:3000/api/login', loginData).subscribe(
//       (response) => {
//         if (response.status) {
//           this.userEmail = response.email;
//           let firstName = response.firstName;
//           let lastName = response.lastName;
//           localStorage.setItem('fullName', firstName + ' ' + lastName);
//           alert(response.message);
//           this.showLogin = false;
//         } else {
//           alert(response.message);
//         }
//       },
//       (error) => {
//         alert(error.error.error);
//         console.error('Error logging in:', error);
//       }
//     );
//   }
//   onOTPSubmit(): void {
//     if (this.otpVerify.invalid) {
//       this.error = 'Please fill in all required fields.';
//       return;
//     }
//     const otp = this.otpVerify.value.otp;
//     var objData = {
//       email: this.userEmail,
//       enteredOtp: otp,
//       type: 'login',
//     };
//     this.http
//       .post<any>('http://localhost:3000/api/verify-otp', objData)
//       .subscribe(
//         (response) => {
//           if (response.status) {
//             localStorage.setItem('token', response.token);
//             alert(response.message);
//             this.router.navigate(['/select']);
//           }
//         },
//         (error) => {
//           alert(error.error.message);
//           console.error('Error logging in:', error);
//         }
//       );
//   }
// }
