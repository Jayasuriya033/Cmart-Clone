import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
  OnInit,
} from '@angular/core';
import { DomainService, Domain } from '../../../services/domain.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnChanges, OnInit {
  @Input() tableData: any[] = [];
  @Input() addForm: boolean = false;
  @Input() tableName: string = '';
  @Output() closeForm = new EventEmitter<boolean>();
  @Input() pageSize: number = 10;

  selectedRow: any = null;
  newRow: Domain = {
    status: '',
    code: '',
    type: '',
    description: '',
    universalFlag: '',
  };

  currentPage: number = 1;
  pagedData: any[] = [];
  totalPages: number = 1;

  filterStatus: string = '';
  filterId: string = '';
  filterCode: string = '';
  filterType: string = '';
  filterDescription: string = '';
  filterUniversalFlag: string = '';

  filteredData: any[] = [];

  constructor(private domainService: DomainService) {}

  applyFilters() {
    this.filteredData = this.tableData.filter(
      (item) =>
        (this.filterStatus === '' ||
          this.filterStatus === 'All' ||
          item.status
            ?.toLowerCase()
            .includes(this.filterStatus.toLowerCase())) &&
        (this.filterId === '' ||
          item.id
            ?.toString()
            .toLowerCase()
            .includes(this.filterId.toLowerCase())) &&
        (this.filterCode === '' ||
          item.code?.toLowerCase().includes(this.filterCode.toLowerCase())) &&
        (this.filterType === '' ||
          item.type?.toLowerCase().includes(this.filterType.toLowerCase())) &&
        (this.filterDescription === '' ||
          item.description
            ?.toLowerCase()
            .includes(this.filterDescription.toLowerCase())) &&
        (this.filterUniversalFlag === '' ||
          this.filterUniversalFlag === 'All' ||
          item.universalFlag
            ?.toLowerCase()
            .includes(this.filterUniversalFlag.toLowerCase()))
    );
    this.currentPage = 1;
    this.updatePagedData();
  }

  updatePagedData() {
    const data =
      this.filteredData && this.filteredData.length >= 0
        ? this.filteredData
        : this.tableData;
    this.totalPages = Math.ceil(data.length / this.pageSize) || 1;
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.pagedData = data.slice(start, end);
  }

  goToPage(page: number) {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.updatePagedData();
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagedData();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagedData();
    }
  }

  onRowClick(row: any) {
    this.selectedRow = { ...row };
  }
  saveChanges() {
    if (this.addForm) {
      console.log(this.tableName);
      const newRows = { ...this.newRow, tableName: this.tableName };
      this.domainService.createDomain(newRows).subscribe({
        next: (res: Domain) => {
          this.tableData.push(res);
          this.newRow = {
            status: '',
            code: '',
            type: '',
            description: '',
            universalFlag: '',
          };
          this.closeForm.emit(false);
          this.addForm = false;
          this.updatePagedData();
        },
        error: (err: any) => console.error('Error creating domain', err),
      });
    } else {
      if (this.selectedRow && this.selectedRow.id != null) {
        console.log('Table', this.tableName);
        const selectedRow = { ...this.selectedRow, tableName: this.tableName };
        this.domainService
          .updateDomain(this.selectedRow.id, selectedRow)
          .subscribe({
            next: (res: Domain) => {
              const index = this.tableData.findIndex(
                (item) => item.id === res.id
              );
              if (index !== -1) this.tableData[index] = res;
              this.selectedRow = null;
              this.updatePagedData();
            },
            error: (err) => console.error('Error updating domain', err),
          });
      }
    }
  }

  cancelEdit() {
    this.selectedRow = null;
  }

  cancelSave() {
    this.newRow = {
      status: '',
      code: '',
      type: '',
      description: '',
      universalFlag: '',
    };
    this.closeForm.emit(false);
  }

  min(a: number, b: number): number {
    return Math.min(a, b);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['tableData'] || changes['pageSize']) {
      this.filteredData = [...this.tableData];
      this.currentPage = 1;
      this.applyFilters();
    }
  }

  ngOnInit() {
    this.filteredData = [...this.tableData];
    this.applyFilters();
  }
}
