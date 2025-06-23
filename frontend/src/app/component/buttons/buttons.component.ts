import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css',
})
export class ButtonsComponent {
  @Output() addClicked = new EventEmitter<boolean>();
  @Output() refreshClicked = new EventEmitter<void>(); 
  @Output() activeClicked = new EventEmitter<void>(); 
  @Output() inactiveClicked = new EventEmitter<void>(); 

  onAddClick() {
    this.addClicked.emit(true); 
  }

  onRefreshClick() {         
    this.refreshClicked.emit();
  }
  onActiveClick(){
    this.activeClicked.emit();
  }
  onInactiveClick() {
    this.inactiveClicked.emit();
  }
}
