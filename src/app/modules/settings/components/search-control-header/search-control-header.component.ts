import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-control-header',
  templateUrl: './search-control-header.component.html',
  styleUrl: './search-control-header.component.scss'
})
export class SearchControlHeaderComponent {


  @Output() searchEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output() actionEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }


  onSearch(searchTerm: string): void {
    this.searchEvent.emit(searchTerm);
  }

  action() {
    this.actionEvent.emit()
  }
}