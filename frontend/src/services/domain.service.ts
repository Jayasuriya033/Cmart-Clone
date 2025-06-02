import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Domain {
  id?: number;
  status: string;
  code: string;
  type: string;
  description: string;
  universalFlag: string;
}

@Injectable({
  providedIn: 'root'
})
export class DomainService {
  private baseUrl = 'http://localhost:3000/api/domain';

  constructor(private http: HttpClient) {}

  getDomains(): Observable<Domain[]> {
    return this.http.get<Domain[]>(this.baseUrl);
  }

  createDomain(domain: Domain): Observable<Domain> {
    return this.http.post<Domain>(this.baseUrl, domain);
  }

updateDomain(id: number, domain: Domain): Observable<Domain> {
  return this.http.put<Domain>(`${this.baseUrl}/${id}`, domain);
}

  deleteDomain(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
