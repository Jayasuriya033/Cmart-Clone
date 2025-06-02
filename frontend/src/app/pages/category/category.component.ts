import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent {
  showAddForm = false;
  handleAddClick(event: boolean) {
    this.showAddForm = event;
  }
  data = [
    {
      status: 'Active',
      id: 3554,
      code: 'CAT22301',
      type: 'Letter',
      description: 'Bill Letter',
      universalFlag: 'N',
    },
    {
      status: 'Active',
      id: 4711,
      code: 'CAT32103',
      type: 'Form',
      description: 'Grt Billing Invoice',
      universalFlag: 'N',
    },
    {
      status: 'Inactive',
      id: 5516,
      code: 'CAT32305',
      type: 'Form',
      description: '2012 Forward Bill Form',
      universalFlag: 'N',
    },
    {
      status: 'Active',
      id: 3551,
      code: 'CAT02301',
      type: 'Outer',
      description: 'Bill O/E',
      universalFlag: 'N',
    },
    {
      status: 'Active',
      id: 7527,
      code: 'CAT023PLY',
      type: 'Outer',
      description: 'bill poly outer',
      universalFlag: 'N',
    },
    {
      status: 'Inactive',
      id: 161,
      code: 'CAT320102',
      type: 'Form',
      description: '2.9 effort bill form',
      universalFlag: 'N',
    },
  ];
}
