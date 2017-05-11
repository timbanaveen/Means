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

  /**
   * Show tooltip at given coords.
   */
  showAt(coords: number[]) {
    this.showAtSource.next(coords);
  }

  /**
   * Hide tooltip
   */
  hide() {
    this.hideSource.next();
  }

  /**
   * let subscribers know about action.
   */
  actionClicked(action: ToolTipAction) {
    this.actionClickedSource.next(action);
  }
}
