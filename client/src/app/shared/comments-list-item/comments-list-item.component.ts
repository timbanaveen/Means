import { Component, OnInit, Input } from '@angular/core';

import { CommentItem } from '../../models/comment-item.model';

@Component({
  selector: 'app-comments-list-item',
  templateUrl: './comments-list-item.component.html',
  styleUrls: ['./comments-list-item.component.scss']
})
export class CommentsListItemComponent implements OnInit {
  @Input() comment: CommentItem;

  constructor() { }

  ngOnInit() {
  }

}
