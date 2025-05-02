import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ChangePasswordComponent } from './change-password/change-password.component';



@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        SignupComponent,
        HomeComponent,
        ChangePasswordComponent
      
    ],
    providers: [EmployeeService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule, 
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        CommonModule,
        MatSnackBarModule
        
    ]
})
export class AppModule { }
