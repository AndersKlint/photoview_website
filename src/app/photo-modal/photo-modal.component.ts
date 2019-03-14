import { Component, OnInit, Inject } from '@angular/core';
import { ImageService } from '../image.service';

import { ImageModalOverlayRef } from '../image-modal-overlay-ref';
import { IMAGE_MODAL_DIALOG_DATA } from '../image-modal-overlay.tokens';

@Component({
  selector: 'app-photo-modal',
  templateUrl: './photo-modal.component.html',
  styleUrls: ['./photo-modal.component.scss']
})
export class PhotoModalComponent implements OnInit {

  rating: string = '0';
  imageMaxHeight: string = '75vh';
  imageMaxWidth: string = '75vw';
  buttonBarTopMargin: string = '10px';
  buttonBarOpacity: string = '1.0';
  isFullscreen: boolean = false;

  constructor(
    private imageService: ImageService,
    private imageModalRef: ImageModalOverlayRef,
    @Inject(IMAGE_MODAL_DIALOG_DATA) public image: any
  ) { }

  ngOnInit() {
    this.getRating();
  }

  getRating() {
    this.imageService.getImageRating(this.image).subscribe(res => {
          this.rating = res;
        }
      );
  }

  onLike() {
    this.imageService.likeImage(this.image).subscribe(res => {
          this.rating = res;
        }
      );
  }

  onClose() {
    this.imageModalRef.close();
  }

  onToggleFullscreen() {
    if (this.isFullscreen) {
      this.imageMaxHeight = '75vh';
      this.imageMaxWidth = '75vw';
      this.buttonBarTopMargin = '10px';
      this.buttonBarOpacity = '1.0'
    }
    else {
      this.imageMaxHeight = '100vh';
      this.imageMaxWidth = '100vw';
      this.buttonBarTopMargin = '-50px';
      this.buttonBarOpacity = '0.0'
    }
    this.isFullscreen = !this.isFullscreen;
  }
}
