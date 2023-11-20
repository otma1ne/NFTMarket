import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-secondary-btn',
  templateUrl: './secondary-btn.component.html',
  styleUrls: ['./secondary-btn.component.scss'],
})
export class SecondaryBtnComponent {
  @Input() buttonText: string = '';
  @Input() type: string = '';
  @Output() btnClicked: EventEmitter<any> = new EventEmitter();

  btnClick() {
    this.btnClicked.emit();
  }
}
