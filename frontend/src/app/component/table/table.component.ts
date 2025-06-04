import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomainService, Domain } from '../../../services/domain.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() tableData: any[] = [];
  @Input() addForm: boolean = false;
  @Input() tableName: string = '';
  @Output() closeForm = new EventEmitter<boolean>();

  selectedRow: any = null;
  newRow: Domain = {
    status: '',
    code: '',
    type: '',
    description: '',
    universalFlag: '',
  };

  constructor(private domainService: DomainService) {}

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
        },
        error: (err: any) => console.error('Error creating domain', err),
      });
    } else {
      if (this.selectedRow && this.selectedRow.id != null) {
        console.log("Table", this.tableName);
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
}
