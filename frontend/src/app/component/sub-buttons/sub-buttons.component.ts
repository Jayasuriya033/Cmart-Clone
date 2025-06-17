import { Component, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-sub-buttons',
  templateUrl: './sub-buttons.component.html',
  styleUrls: ['./sub-buttons.component.css']
})
export class SubButtonsComponent implements OnChanges {
  @Input() dropdownValue: string = '';
  @Output() dropdownValueChange = new EventEmitter<string>();
  @Output() pageSizeChange = new EventEmitter<number>();

  selectedValue: string = '';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['dropdownValue']) {
      this.selectedValue = this.dropdownValue;
    }
  }

  onPageSizeChange(event: any) {
    const value = event.target.value;
    this.selectedValue = value;
    this.dropdownValueChange.emit(value); // keep parent in sync
    this.pageSizeChange.emit(value === '' ? 10 : +value);
  }
}

