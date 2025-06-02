import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}
  activeTime: any;
  TIMEOUT_DURATION: number = 5000;
  ngOnInit(): void {
    this.resetTimer();
  }
  @HostListener('document:mousemove')
  @HostListener('document:keydown')
  @HostListener('document:click')
  @HostListener('document:touchstart') 
  onUserActivity() {
    this.resetTimer();
  }

  resetTimer() {
    clearTimeout(this.activeTime);
    this.activeTime = setTimeout(() => this.logout(), this.TIMEOUT_DURATION);
  }

  logout() {
    this.router.navigate(['/']);
    alert('Logout Successfully!!');
    localStorage.clear();
  }
}
