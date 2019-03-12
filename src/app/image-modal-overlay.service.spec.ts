import { TestBed } from '@angular/core/testing';

import { ImageModalOverlayService } from './image-modal-overlay.service';

describe('ImageModalOverlayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImageModalOverlayService = TestBed.get(ImageModalOverlayService);
    expect(service).toBeTruthy();
  });
});
