import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class PublicationAndCampaign{
    private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  gettingPublicationsAndCampaigns(): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/publicationAndCampign`);
  }
}