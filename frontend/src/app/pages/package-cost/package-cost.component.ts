import { Component, OnInit, ViewChild } from '@angular/core';
import { DomainService, Domain } from '../../../services/domain.service';
import { SubButtonsComponent } from '../../component/sub-buttons/sub-buttons.component';


@Component({
  selector: 'app-package-cost',
  templateUrl: './package-cost.component.html',
  styleUrl: './package-cost.component.css',
})
export class PackageCostComponent implements OnInit {
    @ViewChild('subButtons') subButtonsComponent!: SubButtonsComponent;
  
  showAddForm = false;
  tableName = 'PackageCost';
  data: Domain[] = [];
  dropdownValue = ''; 
  pageSize = 10;
  onPageSizeChange(value: number) {
    this.pageSize = value;
  }
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
  onRefreshDropdown() {
    this.pageSize = 10;
    this.dropdownValue = '';
  }
}
