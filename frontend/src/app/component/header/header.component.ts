import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PublicationAndCampaign } from '../../../services/publicationAndCampaign.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  selectForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private publicationAndCampaign: PublicationAndCampaign
  ) {
    this.selectForm = this.fb.group({
      publication: ['', [Validators.required]],
      campaign: ['', [Validators.required]],
    });
  }
  publication: any[] = [];
  campaign: any[] = [];

  ngOnInit() {
    this.publicationAndCampaign.gettingPublicationsAndCampaigns().subscribe(
      (response) => {
        if (response.status) {
          this.publication = response.publications;
          this.campaign = response.campaigns;

        }
      },
      (error) => {
        alert(error.error.error);
        console.error('Error on Email verify:', error);
      }
    );
  }

  selectedpublication = '';
  selectedcampaign = '';
  onSubmit() {
    if (this.selectForm.invalid) {
      alert('All field required!');
      return;
    }
    this.router.navigate(['/dashboard']);
  }
  @Output() toggleSidebar = new EventEmitter<boolean>();

  sidebarVisible: boolean = false;

  onToggle() {
    this.sidebarVisible = !this.sidebarVisible;
    this.toggleSidebar.emit(this.sidebarVisible);
  }
}


// import {
//   Component,
//   EventEmitter,
//   OnInit,
//   Output,
//   HostListener,
// } from '@angular/core';
// import { Router } from '@angular/router';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
// import { PublicationAndCampaign } from '../../../services/publicationAndCampaign.service';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrl: './header.component.css',
// })
// export class HeaderComponent implements OnInit {
//   selectForm: FormGroup;
//   constructor(
//     private fb: FormBuilder,
//     private http: HttpClient,
//     private router: Router,
//     private publicationAndCampaign: PublicationAndCampaign
//   ) {
//     this.selectForm = this.fb.group({
//       publication: ['', [Validators.required]],
//       campaign: ['', [Validators.required]],
//     });
//   }
//   publication: any[] = [];
//   campaign: any[] = [];
//   fullName: string | null = '';
//   activeTime: any;
//   TIMEOUT_DURATION: number = 600000; 
//   dropdownOpen = false;

//   toggleDropdown() {
//     this.dropdownOpen = !this.dropdownOpen;
//   }

//   ngOnInit() {
//     this.resetTimer();
//     this.fullName = localStorage.getItem('fullName');
//     this.publicationAndCampaign.gettingPublicationsAndCampaigns().subscribe(
//       (response) => {
//         if (response.status) {
//           this.publication = response.publications;
//           this.campaign = response.campaigns;
//         }
//       },
//       (error) => {
//         alert(error.error.error);
//         console.error('Error on Email verify:', error);
//       }
//     );
//   }

//   selectedpublication = '';
//   selectedcampaign = '';
//   onSubmit() {
//     if (this.selectForm.invalid) {
//       alert('All field required!');
//       return;
//     }
//     this.router.navigate(['/dashboard']);
//   }
//   @Output() toggleSidebar = new EventEmitter<boolean>();

//   sidebarVisible: boolean = false;

//   onToggle() {
//     this.sidebarVisible = !this.sidebarVisible;
//     this.toggleSidebar.emit(this.sidebarVisible);
//   }

//   @HostListener('document:mousemove')
//   @HostListener('document:keydown')
//   @HostListener('document:click')
//   @HostListener('document:touchstart')
//   onUserActivity() {
//     this.resetTimer();
//   }

//   resetTimer() {
//     clearTimeout(this.activeTime);
//     this.activeTime = setTimeout(() => this.logout(), this.TIMEOUT_DURATION);
//   }

//   logout() {
//     this.router.navigate(['/']);
//     alert('Logout Successfully!!');
//     localStorage.clear();
//   }
// }
