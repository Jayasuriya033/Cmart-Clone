import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { SignupComponent } from './component/signup/signup.component';
import { ChangePasswordComponent } from './component/change-password/change-password.component';
import { AuthGuard } from '../services/session.guard';
import { SelectComponent } from './component/select/select.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { SubButtonsComponent } from './component/sub-buttons/sub-buttons.component';
import { TableComponent } from './component/table/table.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', redirectTo: '' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'select', component: SelectComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'subbutton', component: SubButtonsComponent},
  { path: 'table', component: TableComponent},
  
  { path: 'forgot-password', component: ChangePasswordComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: LoginComponent } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

