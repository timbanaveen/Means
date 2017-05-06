import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isExpanded = false;
  searchText = '';

  constructor() {}
  ngOnInit() {}

  onSearchClick(event) {
    if (!this.isExpanded) {
      this.isExpanded = true;
      event.target.previousElementSibling.focus();
    }
  }

  onSearchBlur() {
    if (this.searchText.length === 0) {
      this.isExpanded = false;
    }
  }

}
