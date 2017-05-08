import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionToolTipComponent } from './action-tool-tip.component';

describe('ActionToolTipComponent', () => {
  let component: ActionToolTipComponent;
  let fixture: ComponentFixture<ActionToolTipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionToolTipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionToolTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
