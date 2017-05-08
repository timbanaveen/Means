import { TestBed, inject } from '@angular/core/testing';

import { ToolTipService } from './tool-tip.service';

describe('ToolTipService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToolTipService]
    });
  });

  it('should ...', inject([ToolTipService], (service: ToolTipService) => {
    expect(service).toBeTruthy();
  }));
});
