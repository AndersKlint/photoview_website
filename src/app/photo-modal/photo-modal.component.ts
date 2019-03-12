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

  constructor(
    private imageService: ImageService,
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
}
