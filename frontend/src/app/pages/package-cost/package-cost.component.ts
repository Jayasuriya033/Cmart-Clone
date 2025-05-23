import { Component } from '@angular/core';

@Component({
  selector: 'app-package-cost',
  templateUrl: './package-cost.component.html',
  styleUrl: './package-cost.component.css'
})
export class PackageCostComponent {
data = [
    { status: 'Inactive', id: 3554, code: 'PAC22301', type: 'Letter', description: 'Bill Letter', universalFlag: 'N' },
    { status: 'Active', id: 4711, code: 'PAC32103', type: 'Form', description: 'Grt Billing Invoice', universalFlag: 'N' },
    { status: 'Active', id: 5516, code: 'PAC32305', type: 'Form', description: '2012 Forward Bill Form', universalFlag: 'N' },
    { status: 'Active', id: 3551, code: 'PAC02301', type: 'Outer', description: 'Bill O/E', universalFlag: 'N' },
    { status: 'Active', id: 7527, code: 'PAC023PLY', type: 'Outer', description: 'bill poly outer', universalFlag: 'N' },
    { status: 'Inactive', id: 161, code: 'PAC320102', type: 'Form', description: '2.9 effort bill form', universalFlag: 'N' },
  ];
}
