import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ComponentComponent } from '../../pages/component/component.component';
import { PrintProgramComponent } from '../../pages/print-program/print-program.component';
import { CategoryComponent } from '../../pages/category/category.component';
import { PeriodComponent } from '../../pages/period/period.component';
import { PackageCostComponent } from '../../pages/package-cost/package-cost.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {

  selectedComponent: any = null;
  // @Input() visible: boolean = false;
  @Output() addForm = new EventEmitter<boolean>();

  ngOnInit(){
  }

  showAddForm = false;

  handleAddClick(event: boolean) {
    this.showAddForm = event;
        }

  sidebarVisible: boolean = true;

  submoduleMap: Record<string, any> = {
    Component: ComponentComponent,
    'Print Program': PrintProgramComponent,
    Period: PeriodComponent,
    Category: CategoryComponent,
    'Package Cost': PackageCostComponent,
  };

  onSubModuleChange(moduleName: any) {
    this.selectedComponent = this.submoduleMap[moduleName];
  }
}
