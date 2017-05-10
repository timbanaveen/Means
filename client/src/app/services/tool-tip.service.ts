import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

import { ToolTipAction } from '../models/tool-tip-action.model';

@Injectable()
export class ToolTipService {

  private showAtSource = new Subject<number[]>();
  private hideSource = new Subject();
  private actionClickedSource = new Subject();

  showAt$ = this.showAtSource.asObservable();
  hide$ = this.hideSource.asObservable();
  actionClicked$ = this.actionClickedSource.asObservable();

  constructor() {}

  showAt(coords: number[]) {
    this.showAtSource.next(coords);
  }

  hide() {
    this.hideSource.next();
  }

  actionClicked(action: ToolTipAction) {
    this.actionClickedSource.next(action);
  }
}
