import { Component, OnInit, Input } from '@angular/core';

import { Comment } from '../models/comment.model';
import { CommentItem } from '../models/comment-item.model';

import { CommentsService } from '../services/comments.service';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss']
})
export class CommentsListComponent implements OnInit {
  @Input() comments: Comment[];

  constructor(
    private commentsService: CommentsService
  ) {}

  ngOnInit() {
  }

  private getCommentItemModel(comment: Comment): CommentItem {
    return this.commentsService.createCommentItemModel(comment);
  }

}
