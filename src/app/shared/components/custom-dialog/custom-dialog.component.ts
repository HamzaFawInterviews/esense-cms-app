import { Component, Input, ViewChild, ViewContainerRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrls: ['./custom-dialog.component.scss']
})
export class CustomDialogComponent {
  @Input() header: string = 'Default Header';
  @Input() visible: boolean = false;

  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() saveAction: EventEmitter<void> = new EventEmitter<void>();
  @Output() addDialogToggle: EventEmitter<void> = new EventEmitter<void>();

  onClose(): void {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

  onSave(): void {
    this.saveAction.emit();
    this.onClose();
  }

  onAddDialogToggle(): void {
    this.addDialogToggle.emit();
  }
}