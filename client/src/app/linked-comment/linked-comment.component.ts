import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { CommentItem } from '../models/comment-item.model';
import { LinkInfo } from '../models/linkInfo.model';
import { Comment } from '../models/comment.model';
import { CommentType } from '../constants/commentType';

import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-linked-comment',
  templateUrl: './linked-comment.component.html',
  styleUrls: ['./linked-comment.component.scss']
})
export class LinkedCommentComponent implements OnInit {
  @Input() comments: CommentItem[];
  @Input() linkInfo: LinkInfo;
  @Input() isExpanded: boolean = true;
  @Output() commentSaved = new EventEmitter<Comment[]>();
  @Output() hideCommentView = new EventEmitter();

  commentText: string;

  constructor(
    private articleService: ArticlesService
  ) {}

  ngOnInit() {}

  /**
   * Save comment and update comment list
   */
  private onPublishClick() {
    const commentToSave: Comment = {
      comment: this.commentText,
      linkInfo: this.linkInfo,
      type: CommentType.LINKED
    };

    this.articleService
      .addComment(commentToSave, this.articleService.getCurrentArticle()._id)
      .then((updatedComments: Comment[]) => {
        // Inform Parent cmp about saved comment.
        this.commentText = "";
        this.commentSaved.emit(updatedComments);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  private onCloseClick() {
    this.hideCommentView.emit();
  }
}
