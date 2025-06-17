import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css',
})
export class ButtonsComponent {
  @Output() addClicked = new EventEmitter<boolean>();
  @Output() refreshClicked = new EventEmitter<void>(); 

  onAddClick() {
    this.addClicked.emit(true); 
  }

  onRefreshClick() {         
    this.refreshClicked.emit();
  }
}
