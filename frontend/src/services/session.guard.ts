import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      
    if (typeof localStorage !== 'undefined') {
      const token = localStorage.getItem('token');

      if (token) {
        return true;
      } else {
        this.router.navigate(['/']);
        return false;
      }
    } else {
      console.error('localStorage is not defined.');
      this.router.navigate(['/']);
      return false;
    }
  }
}