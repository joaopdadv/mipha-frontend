import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() text:string = "Texto";

  @Output() clickEmitter = new EventEmitter();

  sendClick(){
    this.clickEmitter.emit(true);
  }
}
