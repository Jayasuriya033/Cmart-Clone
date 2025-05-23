import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../services/userservices';
import { debounceTime } from 'rxjs';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  [x: string]: any;
  signupForm: FormGroup;
  separateDialCode = false;
  error: string | null = null;
  showOtpField: boolean = false;
  disableEdit: boolean = false;
  disableEditWithoutOtp: boolean = true;
  suggestionStatus: boolean = false;
  suggestion: string[] = [];
  selectedUsername: string = '';
  errorStatus: boolean = false;
  useNameError: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private ngZone: NgZone
  ) {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNo: ['', Validators.required],
      otp: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()_+\\-=\\[\\]{};:\'",.<>\\/?]).{8,}$'
          ),
        ],
      ],
    });
  }

  ngOnInit() {
    this.signupForm
      .get('firstName')!
      .valueChanges.pipe(debounceTime(400))
      .subscribe(() => this.checkNameAndSuggest());

    this.signupForm
      .get('lastName')!
      .valueChanges.pipe(debounceTime(400))
      .subscribe(() => this.checkNameAndSuggest());

    this.signupForm
      .get('userName')!
      .valueChanges.pipe(debounceTime(400))
      .subscribe(() => {
        this.errorStatus = false;
        this.checkUsernameAvailability();
      });
  }

  selectUsername(name: string): void {
    this.signupForm.patchValue({ userName: name });
    this.suggestionStatus = false;
  }

  checkNameAndSuggest() {
    const firstName = this.signupForm.get('firstName')!.value;
    const lastName = this.signupForm.get('lastName')!.value;
    let data = {
      firstName,
      lastName,
    };

    if (firstName && lastName) {
      this.userService.suggestUserName(data).subscribe((response) => {
        if (response.status) {
          this.ngZone.run(() => {
            this.suggestion = response.data;
            this.suggestionStatus = true;
          });
        }
      });
    }
  }
  suggestionStatusFun() {
    this.suggestionStatus = !this.suggestionStatus;
  }
  checkUsernameAvailability() {
    const userName = this.signupForm.get('userName')!.value;
    let data = {
      userName,
    };

    if (userName) {
      this.userService.checkUserName(data).subscribe((response) => {
        if (!response.status) {
          this.useNameError = response.message;
          this.errorStatus = true;
        }
      });
    }
  }
  editEmail() {
    this.showOtpField = false;
    this.disableEdit = false;
  }
  sendOTP() {
    if (this.signupForm.value.email.invalid) {
      console.log('Email required');
    }
    var email = {
      email: this.signupForm.value.email,
      status: 'signup',
    };
    this.userService.sendOTP(email).subscribe(
      (response) => {
        if (response.status) {
          alert(response.message);
          this.disableEdit = true;
          this.showOtpField = true;
        }
      },
      (error) => {
        alert(error.error.error);
        console.error('Error on Email verify:', error);
      }
    );
  }
  verifyOTP() {
    if (this.signupForm.value.otp.invalid) {
      console.log('OTP required');
    }
    const otp = this.signupForm.value.otp;
    let email = this.signupForm.value.email;
    var objData = {
      email: email,
      enteredOtp: otp,
      type: 'signup',
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
    if (this.signupForm.valid && !this.errorStatus) {
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
          console.log('error---', error.error.message);
          console.error('Error registering user', error);
        }
      );
    }
  }
}
