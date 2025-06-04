import { Component, OnInit } from '@angular/core';
import { DomainService, Domain } from '../../../services/domain.service';

@Component({
  selector: 'app-period',
  templateUrl: './period.component.html',
  styleUrl: './period.component.css',
})
export class PeriodComponent implements OnInit {
  showAddForm = false;
  tableName = 'period';
  data: Domain[] = [];
  handleAddClick(event: boolean) {
    this.showAddForm = event;
  }
  close() {
    this.showAddForm = false;
  }
  constructor(private domainService: DomainService) {}
  ngOnInit(): void {
    this.fetchDomains();
  }

  fetchDomains() {
    const tableName = { tableName: this.tableName };
    this.domainService.getDomains(tableName).subscribe({
      next: (res: Domain[]) => (this.data = res),
      error: (err: any) => console.error('Error fetching domains', err),
    });
  }
}
