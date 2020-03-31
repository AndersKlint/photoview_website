import { Component, OnInit, Inject } from '@angular/core';
import { ImageService } from '../image.service';

import { ImageModalOverlayRef } from '../image-modal-overlay-ref';
import { IMAGE_MODAL_DIALOG_DATA } from '../image-modal-overlay.tokens';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss']
})
export class ImageModalComponent implements OnInit {

  rating: string = '0';
  heartColor: string = 'rgba(255,255,255,1)'
  imageMaxHeight: string = '75vh';
  imageMaxWidth: string = '75vw';
  buttonBarTopMargin: string = '10px';
  buttonBarOpacity: string = '1.0';
  isFullscreen: boolean = false;
  maxLikes: number = 5;
  currentLikes: number = 0;

  constructor(
    private imageService: ImageService,
    private imageModalRef: ImageModalOverlayRef,
    @Inject(IMAGE_MODAL_DIALOG_DATA) public image: any
  ) { }

  ngOnInit() {
    this.getRating();
    this.currentLikes = +localStorage.getItem('like:' + this.image);
    var colorModifier = this.getHeartColor();
    this.heartColor = `rgba(255, ${colorModifier}, ${colorModifier}, 1)`
  }

  getRating() {
    this.imageService.getImageRating(this.image).subscribe(res => {
          this.rating = res;
        }
      );
  }

  onLike() {
    if (this.currentLikes < this.maxLikes) {
      this.currentLikes += 1;
      this.imageService.likeImage(this.image).subscribe(res => {
            this.rating = res;
          }
        );
    }
    else {
      this.currentLikes = 0;
      this.imageService.likeImage(this.image, -5).subscribe(res => {
        this.rating = res;
        }
      );
    }
    var colorModifier = this.getHeartColor();
    this.heartColor = `rgba(255, ${colorModifier}, ${colorModifier}, 1)`
    localStorage.setItem('like:' + this.image, this.currentLikes.toString());
  }

  private getHeartColor() {
    return (this.maxLikes - this.currentLikes) * 255 / this.maxLikes;
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
