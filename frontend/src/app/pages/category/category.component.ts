import { Component, OnInit } from '@angular/core';
import { DomainService, Domain } from '../../../services/domain.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent implements OnInit {
  showAddForm = false;
  tableName = 'Category';
  data: Domain[] = [];
  handleAddClick(event: boolean) {
    this.showAddForm = event;
  }
  constructor(private domainService: DomainService) {}

  ngOnInit(): void {
    this.fetchDomains();
  }

  fetchDomains() {
    const tableName = {tableName : this.tableName}
    this.domainService.getDomains(tableName).subscribe({
      next: (res: Domain[]) => (this.data = res),
      error: (err: any) => console.error('Error fetching domains', err),
    });
  }
}
