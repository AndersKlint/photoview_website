import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-photo-modal',
  templateUrl: './photo-modal.component.html',
  styleUrls: ['./photo-modal.component.scss']
})
export class PhotoModalComponent implements OnInit {

  imageName: string;
  rating: string = '0';

  constructor(
    private imageService: ImageService,
    private dialogRef: MatDialogRef<PhotoModalComponent>,
    @Inject(MAT_DIALOG_DATA) private data
  ) { }

  ngOnInit() {
    this.imageName = this.data.imageName;
    this.getRating();
  }

  getRating() {
    this.imageService.getImageRating(this.imageName).subscribe(res => {
          this.rating = res;
        }
      );
  }

  onLike() {
    this.imageService.likeImage(this.imageName).subscribe(res => {
          this.rating = res;
        }
      );
  }
}
