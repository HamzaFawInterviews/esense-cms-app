import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-custom-transparent-button',
  templateUrl: 'custom-transparent-button.component.html',
  styleUrl: 'custom-transparent-button.component.scss',
  encapsulation:ViewEncapsulation.None
})
export class CustomTransparentButtonComponent {
  @Output() action: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  onClick() {
    this.action.emit();
  }
}
