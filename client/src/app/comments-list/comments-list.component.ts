import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Comment } from '../models/comment.model';
import { CommentItem } from '../models/comment-item.model';
import { CommentType } from '../constants/commentType';

import { CommentsService } from '../services/comments.service';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss']
})
export class CommentsListComponent implements OnInit {
  @Input() comments: Comment[];
  @Output() onCommentAdded = new EventEmitter<Comment>();

  commentText: string = "";
  showPublish: boolean;

  constructor(
    private commentsService: CommentsService
  ) {}

  ngOnInit() {
  }

  /**
   * Convert Comment model to Comment Item model
   */
  private getCommentItemModel(comment: Comment): CommentItem {
    return this.commentsService.createCommentItemModel(comment);
  }

  private onTextAreaBlur() {
    this.showPublish = !!this.commentText.length;
  }

  /**
   * create comment and delegate it to parent cmp.
   */
  private onPublishButtonClick() {
    let comment: Comment = {
      comment: this.commentText,
      type: CommentType.TEXT
    };

    this.onCommentAdded.emit(comment);
    this.commentText = "";
    this.showPublish = false;
  }

}
