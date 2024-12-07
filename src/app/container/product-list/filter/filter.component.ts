import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  @Input()
  all:number = 0;
  @Input()
  inStock:number = 0;
  @Input()
  outOfStock:number = 0;

  selectedRadioButton :string = 'All';

  @Output()
  selectedRadioButtonChanged :EventEmitter<string> = new EventEmitter<string>();

  onSelectedRadioButtonChanged() {
    console.log("Event Triggered")
    console.log(this.selectedRadioButton)
    this.selectedRadioButtonChanged.emit(this.selectedRadioButton)
  }

}
