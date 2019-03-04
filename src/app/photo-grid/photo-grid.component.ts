import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { PhotoModalComponent } from '../photo-modal/photo-modal.component';

@Component({
  selector: 'app-photo-grid',
  templateUrl: './photo-grid.component.html',
  styleUrls: ['./photo-grid.component.scss']
})
export class PhotoGridComponent implements OnInit {
  images: string[] = [];
  photoDialogRef: MatDialogRef<PhotoModalComponent>;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    for (var _i = 0; _i < 115; _i++) {
      this.images.push('http://localhost:5000/images/' + _i + '.png');
      }
  /*  this.images = [
      'http://www.imperial.ac.uk/ImageCropToolT4/imageTool/uploaded-images/newseventsimage_1529346275459_mainnews2012_x1.jpg',
      'https://files.allaboutbirds.net/wp-content/uploads/2015/06/prow-featured.jpg',
      'https://r.hswstatic.com/w_907/gif/drunk-bird.jpg',
      'https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_960,f_auto/DCTM_Penguin_UK_DK_AL526630_wkmzns.jpg',
      'http://en.bcdn.biz/images/emails_source/3a890069-edfb-4ceb-ab29-9a1b6fb206cf.jpg',
      'https://www.birdlife.org/sites/default/files/styles/1600/public/news/puffin-1546796_1920_1.jpg?itok=4DU42phi',
      'https://thebukitbrownexperience.files.wordpress.com/2012/06/birds-of-paradise.jpg',
      'https://download.ams.birds.cornell.edu/api/v1/asset/28634241/1200',
      'http://localhost:5000/images/2.png'
  ];*/
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
