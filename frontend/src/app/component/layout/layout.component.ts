import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
showSubmodules = false;
 @Input() visible: boolean = true;
   @Output() subModuleSelected = new EventEmitter<string>();


  subModules: string[] = [
    'Component',
    'Print Program',
    'Period',
    'Category',
    'Package Cost'
  ];

  toggleModule() {
    this.showSubmodules = !this.showSubmodules;
  }
 onSubmoduleClick(submodule: string) {
  console.log("Clicked submodule:", submodule);
  this.subModuleSelected.emit(submodule);
}

}
