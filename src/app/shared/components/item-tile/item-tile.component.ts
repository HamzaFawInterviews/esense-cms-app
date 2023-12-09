import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-tile',
  templateUrl: './item-tile.component.html',
  styleUrls: ['./item-tile.component.scss']
})
export class ItemTileComponent {
  @Input() title: string = '';
  @Output() editEvent = new EventEmitter<void>();
  @Output() deleteEvent = new EventEmitter<void>();

  onEdit() {
    this.editEvent.emit();
  }

  onDelete() {
    this.deleteEvent.emit();
  }
}