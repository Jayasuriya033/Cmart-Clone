import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UpdatePassword } from '../../services/userservices';
import { UserService } from '../../services/userservices';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm: FormGroup;
  emailValidation: FormGroup;
  otpValidation: FormGroup;
  passwordValidation: FormGroup;
  error: string | null = null;
  showPassword: boolean = true;
  status: any = 1;
  email: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private passwordUpdate: UpdatePassword,
    private userService: UserService
  ) {
    this.emailValidation = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
    });
    this.otpValidation = this.fb.group({
      otp: ['', [Validators.required]],
    });
    this.passwordValidation = this.fb.group({
      newPassword: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()_+\\-=\\[\\]{};:\'",.<>\\/?]).{8,}$'
          )
        ]
      ],
      confirmPassword: ['', [Validators.required]],
    });
    this.changePasswordForm = this.fb.group(
      {
        otpValidation: this.otpValidation,
        emailValidation: this.emailValidation,
        passwordValidation: this.passwordValidation,
      },
      { validator: this.passwordMatchValidator }
    );
  }
  ngOnInit(): void {}
  showPasswordfun() {
    this.showPassword = !this.showPassword;
  }

  onSendOtp(): void {
    if (this.emailValidation.value.email.invalid) {
      this.error = 'Please fill in the  Email.';
      return;
    }
    let verifyOTP = {
      email: this.emailValidation.value.email,
      status: 'forgot-password',
    };

    this.userService.sendOTP(verifyOTP).subscribe(
      (response) => {
        if (response.status) {
          alert(response.message);
          this.status = 2;
        }
      },
      (error) => {
        alert(error.error.error);
        console.error('Error logging in:', error);
      }
    );
  }

  verifyOtp(): void {
    if (this.otpValidation.invalid) {
      this.error = 'Please fill the OTP';
      return;
    }
    var objData = {
      email: this.emailValidation.value.email,
      enteredOtp: this.otpValidation.value.otp,
      type: 'forgot-password',
    };
    this.userService.otpVerify(objData).subscribe(
      (response) => {
        if (response.status) {
          this.status = 3;
        }
      },
      (error) => {
        alert(error.error.error);
        console.error('Error logging in:', error);
      }
    );
  }

  updatePassword(): void {
    if (this.passwordValidation.invalid) {
      this.error = 'Please fill the All details';
      return;
    }
    const credentials: any = {
      email: this.email,
      newPassword: this.passwordValidation.value.newPassword,
    };
    this.passwordUpdate.passwordUpdate(credentials).subscribe(
      (response) => {
        if (response.status) {
          alert(response.message);
          this.router.navigate(['/']);
        }
      },
      (error) => {
        alert(error.error.error);
      }
    );
  }

  passwordMatchValidator(form: FormGroup) {
    const passwordGroup = form.get('passwordValidation') as FormGroup;
    const newPassword = passwordGroup.get('newPassword')?.value;
    const confirmPassword = passwordGroup.get('confirmPassword')?.value;
  
    return newPassword === confirmPassword ? null : { mismatch: true };
  }
  

  onSubmit() {
    if (this.changePasswordForm.valid) {
      console.log(
        'Password changed successfully',
        this.changePasswordForm.value
      );
      this.router.navigate(['/']);
    }
  }
  differentNumber() {
    this.status = 1;
  }

  resetForm() {
    this.changePasswordForm.reset();
  }
}
