import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/userservices';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  [x: string]: any;
  signupForm: FormGroup;
  separateDialCode = false;
  error:string|null = null;
  showOtpField:boolean = false;
  disableEdit:boolean = false;
  disableEditWithoutOtp = true;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNo: ['', Validators.required],
      otp: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]{6}$') 
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()_+\\-=\\[\\]{};:\'",.<>\\/?]).{8,}$'
          )
        ]
      ]
    });
  }
  editEmail(){
    this.showOtpField = false;
    this.disableEdit = false;
  }
  sendOTP(){
    if (this.signupForm.value.email.invalid) {
      console.log("Email required"); 
    }
    var email = {
      email: this.signupForm.value.email,
       status : "signup"
    }
    this.userService.sendOTP(email).subscribe(
      (response) => {        
        if (response.status) {
          alert(response.message);
          this.disableEdit =true;
          this.showOtpField = true;
        }
      },
      (error) => {
        alert(error.error.error);
        console.error('Error on Email verify:', error);
      }
    )
  }
  verifyOTP(){    
    if (this.signupForm.value.otp.invalid) {
      console.log("OTP required");
    }
    const otp = this.signupForm.value.otp;
    let email = this.signupForm.value.email;
    var objData = {
      email: email,
      enteredOtp: otp,
      type:"signup"
    };
    console.log(objData);
    
    this.userService.otpVerify(objData).subscribe(
        (response) => {
          if (response.status) {
            alert(response.message);
            this.showOtpField = false;
            this.disableEditWithoutOtp = true;
          }
        },
        (error) => {
          alert(error.error.message);
          console.error('Error logging in:', error);
        }
      );
  }

  onSubmit() {
    if (this.signupForm.valid) {
      this.userService.registerUser(this.signupForm.value).subscribe(
        (response) => {
          console.log(response);
          
          if (response.status) {
            let message = response.message;
            alert(message);
            console.log('User registered successfully', response);
            this.router.navigate(['/login']);
          } else {
            alert(response.message);
          }
        },
        (error) => {
          alert(error.error.message);
          console.log("error---", error.error.message);
          console.error('Error registering user', error);
        }
      );
    }
  }
}
