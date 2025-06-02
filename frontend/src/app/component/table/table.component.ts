import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { DomainService, Domain } from '../../../services/domain.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() tableData: any[] = [];
  @Input() addForm: boolean = false;
  @Output() closeForm = new EventEmitter<boolean>();

  selectedRow: any = null;
  newRow: Domain = {
    status: '',
    code: '',
    type: '',
    description: '',
    universalFlag: ''
  }; 

  constructor(private domainService: DomainService) {}

  onRowClick(row: any) {
    this.selectedRow = { ...row };
  }

  // saveChanges() {
  //   if (this.addForm) {
  //     this.domainService.createDomain(this.newRow).subscribe({
  //       next: (res: Domain) => {
  //         this.tableData.push(res);
  //         this.newRow = {
  //           status: '',
  //           code: '',
  //           type: '',
  //           description: '',
  //           universalFlag: ''
  //         }; 
  //         this.closeForm.emit(false);
  //         this.addForm = false;
  //       },
  //       error: (err: any) => console.error('Error creating domain', err)
  //     });
  //   } else {
  //     if (this.selectedRow && this.selectedRow.id != null) {
  //       const index = this.tableData.findIndex(
  //         (item) => item.id === this.selectedRow.id
  //       );
  //       if (index !== -1) {
  //         this.tableData[index] = { ...this.selectedRow };
  //       }
  //       this.selectedRow = null;
  //     }
  //   }
  // }

  saveChanges() {
  if (this.addForm) {
    this.domainService.createDomain(this.newRow).subscribe({
      next: (res: Domain) => {
        this.tableData.push(res);
        this.newRow = {
          status: '',
          code: '',
          type: '',
          description: '',
          universalFlag: ''
        };
        this.closeForm.emit(false);
        this.addForm = false;
      },
      error: (err: any) => console.error('Error creating domain', err)
    });
  } else {
    if (this.selectedRow && this.selectedRow.id != null) {
      this.domainService.updateDomain(this.selectedRow.id, this.selectedRow).subscribe({
        next: (res: Domain) => {
          const index = this.tableData.findIndex(item => item.id === res.id);
          if (index !== -1) this.tableData[index] = res;
          this.selectedRow = null;
        },
        error: err => console.error('Error updating domain', err)
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
      universalFlag: ''
    };
    this.closeForm.emit(false);
  }
}
