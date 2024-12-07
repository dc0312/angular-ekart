import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText: string = '';

  @ViewChild("searchInput") searchInputEl: ElementRef;

  //1. Create an event
  //4. Decorate with @Output
  @Output()
  searchTextChangeEvent :EventEmitter<string> =  new EventEmitter<string>();

  //3. Create custom event method and emit the searchText
  onSearchTextChangeEvent() {
    this.searchTextChangeEvent.emit(this.searchText);
  }

  updateSearchText(){
    this.searchText = this.searchInputEl.nativeElement.value;
    this.searchTextChangeEvent.emit(this.searchText);
}

}