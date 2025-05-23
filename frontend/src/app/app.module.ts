import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './component/signup/signup.component';
import { HomeComponent } from './component/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ChangePasswordComponent } from './component/change-password/change-password.component';
import { HeaderComponent } from './component/header/header.component';
import { LayoutComponent } from './component/layout/layout.component';
import { SelectComponent} from './component/select/select.component'
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ComponentComponent } from './pages/component/component.component';
import { PrintProgramComponent } from './pages/print-program/print-program.component';
import { PeriodComponent } from './pages/period/period.component';
import { CategoryComponent } from './pages/category/category.component';
import { PackageCostComponent } from './pages/package-cost/package-cost.component';
import { ButtonsComponent } from './component/buttons/buttons.component';
import { SubButtonsComponent } from './component/sub-buttons/sub-buttons.component';
import { TableComponent } from './component/table/table.component';



@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        SignupComponent,
        HomeComponent,
        ChangePasswordComponent,
        HeaderComponent,
        LayoutComponent,
        SelectComponent,
        DashboardComponent,
        ComponentComponent,
        PrintProgramComponent,
        PeriodComponent,
        CategoryComponent,
        PackageCostComponent,
        ButtonsComponent,
        SubButtonsComponent,
        TableComponent
      
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
