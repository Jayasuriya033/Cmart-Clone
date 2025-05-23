import { Component, Input } from '@angular/core';
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
export class DashboardComponent {
  selectedComponent: any = null;
  @Input() visible: boolean = false;

  sidebarVisible: boolean = true;

  submoduleMap: Record<string, any> = {
    'Component': ComponentComponent,
    'Print Program': PrintProgramComponent,
    'Period': PeriodComponent,
    'Category': CategoryComponent,
    'Package Cost': PackageCostComponent,
  };

  onSubModuleChange(moduleName: any) {
    console.log('Received in dashboard:', moduleName);
    this.selectedComponent = this.submoduleMap[moduleName];
    console.log('Selected component:', this.selectedComponent);
  }
}
