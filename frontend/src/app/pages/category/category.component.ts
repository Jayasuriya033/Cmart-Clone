import { Component, OnInit, ViewChild } from '@angular/core';
import { DomainService, Domain } from '../../../services/domain.service';
import { SubButtonsComponent } from '../../component/sub-buttons/sub-buttons.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent implements OnInit {
  @ViewChild('subButtons') subButtonsComponent!: SubButtonsComponent;

  showAddForm = false;
  tableName = 'Category';
  data: Domain[] = [];
  pageSize = 10;
  dropdownValue = ''; // Add this line

  onPageSizeChange(value: number) {
    this.pageSize = value;
  }

  handleAddClick(event: boolean) {
    this.showAddForm = event;
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

onRefreshDropdown() {
    this.pageSize = 10;
    this.dropdownValue = ''; 
  }
}
