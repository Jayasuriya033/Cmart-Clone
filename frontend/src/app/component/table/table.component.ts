import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
   @Input() tableData: any[] = []; 

   
 data = [
    { status: 'Active', id: 3554, code: 'MDF22301', type: 'Letter', description: 'Bill Letter', universalFlag: 'N' },
    { status: 'Active', id: 4711, code: 'MDF32103', type: 'Form', description: 'Grt Billing Invoice', universalFlag: 'N' },
    { status: 'Active', id: 5516, code: 'MDF32305', type: 'Form', description: '2012 Forward Bill Form', universalFlag: 'N' },
    { status: 'Active', id: 3551, code: 'MDF02301', type: 'Outer', description: 'Bill O/E', universalFlag: 'N' },
    { status: 'Active', id: 7527, code: 'MDF023PLY', type: 'Outer', description: 'bill poly outer', universalFlag: 'N' },
    { status: 'Inactive', id: 161, code: 'APQ320102', type: 'Form', description: '2.9 effort bill form', universalFlag: 'N' },
  ];
}
