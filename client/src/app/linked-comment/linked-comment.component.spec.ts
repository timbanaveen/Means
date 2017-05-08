import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedCommentComponent } from './linked-comment.component';

describe('LinkedCommentComponent', () => {
  let component: LinkedCommentComponent;
  let fixture: ComponentFixture<LinkedCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkedCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
