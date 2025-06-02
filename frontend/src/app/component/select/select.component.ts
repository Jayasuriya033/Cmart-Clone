import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PublicationAndCampaign } from '../../../services/publicationAndCampaign.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.css',
})
export class SelectComponent implements OnInit {
  selectForm: FormGroup;
  constructor(
    private fb: FormBuilder,
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

  a = 1;

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
        console.error('Error on Getting:', error);
      }
    );
  }

  onSubmit() {
    if (this.selectForm.invalid) {
      alert('All field required!');
      return;
    }
    this.router.navigate(['/dashboard']);
  }
}
