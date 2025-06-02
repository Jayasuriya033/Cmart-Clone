// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-component',
//   templateUrl: './component.component.html',
//   styleUrl: './component.component.css'
// })
// export class ComponentComponent {
//    showAddForm = false;
//   handleAddClick(event: boolean) {
//     this.showAddForm = event
//   }
//   close(){
//     this.showAddForm =false
//   }
//  data = [
//     { status: 'Active', id: 3554, code: 'COM22301', type: 'Letter', description: 'Bill Letter', universalFlag: 'N' },
//     { status: 'Active', id: 4711, code: 'COM32103', type: 'Form', description: 'Grt Billing Invoice', universalFlag: 'N' },
//     { status: 'Active', id: 5516, code: 'COM32305', type: 'Form', description: '2012 Forward Bill Form', universalFlag: 'N' },
//     { status: 'Active', id: 3551, code: 'COM02301', type: 'Outer', description: 'Bill O/E', universalFlag: 'N' },
//     { status: 'Inactive', id: 7527, code: 'COM023PLY', type: 'Outer', description: 'bill poly outer', universalFlag: 'N' },
//     { status: 'Inactive', id: 161, code: 'COM320102', type: 'Form', description: '2.9 effort bill form', universalFlag: 'N' },
//   ];
// }



import { Component, OnInit } from '@angular/core';
import { DomainService, Domain } from '../../../services/domain.service';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {
  showAddForm = false;
  data: Domain[] = [];

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
    this.domainService.getDomains().subscribe({
      next: (res: Domain[]) => this.data = res,
      error: (err: any) => console.error('Error fetching domains', err)
    });
  }

  createDomain(domain: Domain) {
    this.domainService.createDomain(domain).subscribe({
      next: (res: any) => {
        this.data.push(res);
        this.close();
      },
      error: (err: any) => console.error('Error creating domain', err)
    });
  }

  updateDomain(id: number, updatedDomain: Domain) {
    this.domainService.updateDomain(id, updatedDomain).subscribe({
      next: (res: any) => {
        const index = this.data.findIndex(d => d.id === id);
        if (index !== -1) this.data[index] = res;
        this.close();
      },
      error: (err: any) => console.error('Error updating domain', err)
    });
  }

  deleteDomain(id: number) {
    this.domainService.deleteDomain(id).subscribe({
      next: () => this.data = this.data.filter(d => d.id !== id),
      error: (err: any) => console.error('Error deleting domain', err)
    });
  }
}
