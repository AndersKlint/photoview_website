import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { PhotoModalComponent } from '../photo-modal/photo-modal.component';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-photo-grid',
  templateUrl: './photo-grid.component.html',
  styleUrls: ['./photo-grid.component.scss']
})
export class PhotoGridComponent implements OnInit {
  images: string[] = [];
  photoDialogRef: MatDialogRef<PhotoModalComponent>;

  constructor(private dialog: MatDialog, private imageService: ImageService) { }

  ngOnInit() {
    this.images = this.imageService.getThumbnails();
  }

  openPhotoModal(image) {
    this.photoDialogRef = this.dialog.open(PhotoModalComponent, {
      maxHeight: '95vh',
      data: {
        image: image
      }
    });
  }

}
