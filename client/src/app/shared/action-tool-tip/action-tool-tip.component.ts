import { Component, OnInit } from '@angular/core';

import { ToolTipAction } from '../../models/tool-tip-action.model';
import { ToolTipService } from '../../services/tool-tip.service';

@Component({
  selector: 'app-action-tool-tip',
  templateUrl: './action-tool-tip.component.html',
  styleUrls: ['./action-tool-tip.component.scss']
})
export class ActionToolTipComponent implements OnInit {
  private top: number;
  private left: number;
  private show: boolean;
  
  private actions: ToolTipAction[] = [
    {
      iconName: 'create',
      name: 'comment'
    }
  ];

  constructor(
    private toolTipService: ToolTipService
  ) { 
    toolTipService.showAt$.subscribe(coords => {
      this.left = coords[0];
      this.top = coords[1];
      this.show = true;
    });

    toolTipService.hide$.subscribe(() => {
      this.show = false;
    });
  }

  ngOnInit() {
  }

  onActionClick(action: ToolTipAction) {
    this.toolTipService.actionClicked(action);
  }
}
