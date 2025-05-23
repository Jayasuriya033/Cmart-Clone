import { Component } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrl: './component.component.css'
})
export class ComponentComponent {
 data = [
    { status: 'Active', id: 3554, code: 'COM22301', type: 'Letter', description: 'Bill Letter', universalFlag: 'N' },
    { status: 'Active', id: 4711, code: 'COM32103', type: 'Form', description: 'Grt Billing Invoice', universalFlag: 'N' },
    { status: 'Active', id: 5516, code: 'COM32305', type: 'Form', description: '2012 Forward Bill Form', universalFlag: 'N' },
    { status: 'Active', id: 3551, code: 'COM02301', type: 'Outer', description: 'Bill O/E', universalFlag: 'N' },
    { status: 'Inactive', id: 7527, code: 'COM023PLY', type: 'Outer', description: 'bill poly outer', universalFlag: 'N' },
    { status: 'Inactive', id: 161, code: 'COM320102', type: 'Form', description: '2.9 effort bill form', universalFlag: 'N' },
  ];
}
