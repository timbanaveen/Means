import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class SearchService {
  private searchValueChangeSource = new Subject<string>();

  searchValueChange$ = this.searchValueChangeSource.asObservable();
  constructor() {}
  
  searchValueChanged(value) {
    this.searchValueChangeSource.next(value);
  }
}
