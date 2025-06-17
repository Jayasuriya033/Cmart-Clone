import { Component, OnInit, ViewChild } from '@angular/core';
import { DomainService, Domain } from '../../../services/domain.service';
import { SubButtonsComponent } from '../../component/sub-buttons/sub-buttons.component';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css'],
})
export class ComponentComponent implements OnInit {
  @ViewChild('subButtons') subButtonsComponent!: SubButtonsComponent;

  showAddForm = false;
  data: Domain[] = [];
  tableName = 'component';
  pageSize = 10;
  dropdownValue = ''; 

  onPageSizeChange(value: number) {
    this.pageSize = value;
  }

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

  onRefreshDropdown() {
    this.pageSize = 10;
    this.dropdownValue = ''; 
  }
}
