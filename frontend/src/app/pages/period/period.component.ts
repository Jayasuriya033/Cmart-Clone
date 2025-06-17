import { Component, OnInit, ViewChild } from '@angular/core';
import { DomainService, Domain } from '../../../services/domain.service';
import { SubButtonsComponent } from '../../component/sub-buttons/sub-buttons.component';

@Component({
  selector: 'app-period',
  templateUrl: './period.component.html',
  styleUrl: './period.component.css',
})
export class PeriodComponent implements OnInit {
    @ViewChild('subButtons') subButtonsComponent!: SubButtonsComponent;

  showAddForm = false;
  tableName = 'period';
  data: Domain[] = [];
  pageSize = 10;
  dropdownValue = ''; 
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
