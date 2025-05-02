// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
// import { Router } from '@angular/router';


// @Component({
//   selector: 'app-submit-form',
//   templateUrl: './submit-form.component.html',
//   styleUrls: ['./submit-form.component.css'], 
// })
// export class SubmitFormComponent implements OnInit {

//   form: FormGroup;

//   constructor(private fb: FormBuilder, private router: Router) { 
//     this.form = this.fb.group({
//       username: ['', Validators.required],
//       password: ['', Validators.required],
//       confirmPassword: ['', Validators.required]
//     }, {
//       validator: this.passwordMatchValidator
//     });
//   }

//   ngOnInit(): void {
    
//   }

//   passwordMatchValidator(control: AbstractControl) {
//     const password = control.get('password')?.value;
//     const confirmPassword = control.get('confirmPassword')?.value;
//     if (password !== confirmPassword) {
//       control.get('confirmPassword')?.setErrors({ passwordMismatch: true });
//       return { confirmPassword: "error" };
//     } else {
//       return null;
//     }
//   }

//   onSubmit() { 
//     if (this.form.valid) {
//       console.log(this.form.value);
//       this.router.navigate(['/login']); 
//     }
//   }
// }
