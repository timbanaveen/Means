import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class ToolTipService {

  private showAtSource = new Subject<number[]>();
  private hideSource = new Subject();

  showAt$ = this.showAtSource.asObservable();
  hide$ = this.hideSource.asObservable();

  constructor() {}

  showAt(coords: number[]) {
    this.showAtSource.next(coords);
  }

  hide() {
    this.hideSource.next();
  }
}
