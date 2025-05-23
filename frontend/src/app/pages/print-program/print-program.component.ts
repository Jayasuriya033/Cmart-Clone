import { Component } from '@angular/core';

@Component({
  selector: 'app-print-program',
  templateUrl: './print-program.component.html',
  styleUrl: './print-program.component.css'
})
export class PrintProgramComponent {
data = [
    { status: 'Active', id: 3554, code: 'PRI22301', type: 'Letter', description: 'Bill Letter', universalFlag: 'N' },
    { status: 'Inactive', id: 4711, code: 'PRI32103', type: 'Form', description: 'Grt Billing Invoice', universalFlag: 'N' },
    { status: 'Active', id: 5516, code: 'PRI32305', type: 'Form', description: '2012 Forward Bill Form', universalFlag: 'N' },
    { status: 'Inactive', id: 3551, code: 'PRI02301', type: 'Outer', description: 'Bill O/E', universalFlag: 'N' },
    { status: 'Active', id: 7527, code: 'PRI023PLY', type: 'Outer', description: 'bill poly outer', universalFlag: 'N' },
    { status: 'Inactive', id: 161, code: 'PRI20102', type: 'Form', description: '2.9 effort bill form', universalFlag: 'N' },
  ];
}
