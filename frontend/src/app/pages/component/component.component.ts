import { Component, OnInit } from '@angular/core';
import { DomainService, Domain } from '../../../services/domain.service';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css'],
})
export class ComponentComponent implements OnInit {
  showAddForm = false;
  data: Domain[] = [];
  tableName = 'component';

  constructor(private domainService: DomainService) {}

  ngOnInit(): void {
    this.fetchDomains();
  }

  handleAddClick(event: boolean) {
    this.showAddForm = event;
  }

  close() {
    this.showAddForm = false;
  }

  fetchDomains() {
    const tableName = { tableName: this.tableName };
    this.domainService.getDomains(tableName).subscribe({
      next: (res: Domain[]) => (this.data = res),
      error: (err: any) => console.error('Error fetching domains', err),
    });
  }
}
