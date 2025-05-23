import { Component } from '@angular/core';

@Component({
  selector: 'app-period',
  templateUrl: './period.component.html',
  styleUrl: './period.component.css'
})
export class PeriodComponent {
data = [
    { status: 'Active', id: 3554, code: 'PER22301', type: 'Letter', description: 'Bill Letter', universalFlag: 'N' },
    { status: 'Active', id: 4711, code: 'PER32103', type: 'Form', description: 'Grt Billing Invoice', universalFlag: 'N' },
    { status: 'Active', id: 5516, code: 'PER32305', type: 'Form', description: '2012 Forward Bill Form', universalFlag: 'N' },
    { status: 'Inactive', id: 3551, code: 'PER02301', type: 'Outer', description: 'Bill O/E', universalFlag: 'N' },
    { status: 'Active', id: 7527, code: 'PER023PLY', type: 'Outer', description: 'bill poly outer', universalFlag: 'N' },
    { status: 'Inactive', id: 161, code: 'PER320102', type: 'Form', description: '2.9 effort bill form', universalFlag: 'N' },
  ];
}
