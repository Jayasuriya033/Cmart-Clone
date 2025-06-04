import { Component, OnInit } from '@angular/core';
import { DomainService, Domain } from '../../../services/domain.service';

@Component({
  selector: 'app-package-cost',
  templateUrl: './package-cost.component.html',
  styleUrl: './package-cost.component.css',
})
export class PackageCostComponent implements OnInit {
  showAddForm = false;
  tableName = 'PackageCost';
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
