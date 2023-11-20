import { Component, EventEmitter, Input, Output } from '@angular/core';
import { buttonType } from 'src/app/enums/button-type';

@Component({
  selector: 'app-primary-btn',
  templateUrl: './primary-btn.component.html',
  styleUrls: ['./primary-btn.component.scss'],
})
export class PrimaryBtnComponent {
  @Input() buttonText: string = '';
  @Input() type: string = '';
  @Output() btnClicked: EventEmitter<any> = new EventEmitter();

  btnClick() {
    this.btnClicked.emit();
  }
}
