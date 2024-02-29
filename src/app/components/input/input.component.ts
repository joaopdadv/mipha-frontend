import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent{
  @Input() label!:string;
  @Input() placeholder:string = "";
  
  @Output() inputEmitter = new EventEmitter();
  input:string = "";

  changeInputValue() {
    this.inputEmitter.emit(this.input);
  }
}
