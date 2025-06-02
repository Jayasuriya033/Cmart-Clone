import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css',
})
export class ButtonsComponent {
  @Output() addClicked = new EventEmitter<boolean>();

  onAddClick() {
    this.addClicked.emit(true); 
  }
}
