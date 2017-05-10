import { Component, OnInit } from '@angular/core';

import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isExpanded = false;
  searchText = '';

  constructor(
    private searchService: SearchService
  ) {}

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

  onSearchChange() {
    this.searchService.searchValueChanged(this.searchText);
  }

}
