import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ImageService } from '../image.service';
import { ActivatedRoute, Router }  from '@angular/router';
import { Subscription } from 'rxjs';
import { NgxMasonryOptions } from 'ngx-masonry';

import { ImageModalOverlayService } from '../image-modal-overlay.service';
import { ImageModalOverlayRef } from '../image-modal-overlay-ref';

@Component({
  selector: 'app-photo-grid',
  templateUrl: './photo-grid.component.html',
  styleUrls: ['./photo-grid.component.scss']
})

// Child routing tutorial (for modal): https://medium.com/ngconf/routing-to-angular-material-dialogs-c3fb7231c177
export class PhotoGridComponent implements OnInit, OnDestroy {
  image_info: {} = {};
  sortedImages: string[];
  routeQueryParams$: Subscription;

  public masonryOptions: NgxMasonryOptions = {
		transitionDuration: '0.2s',
		gutter: 20,
		resize: true,
		initLayout: true
  };

  constructor(private imageModal: ImageModalOverlayService, private imageService: ImageService, private route: ActivatedRoute, private router: Router) {
    this.routeQueryParams$ = route.queryParams.subscribe(params => {
      if (params['img']) {
        this.openPhotoModal(params['img']);
      }
    });
  }

  ngOnInit() {
    this.imageService.getFilenames().subscribe(res => {
      this.image_info = res;
      console.log(res);
      this.sortedImages = this.getKeysSortedByValue(this.image_info);
    });
  }

  ngOnDestroy() {
    this.routeQueryParams$.unsubscribe();
  }

  getKeysSortedByValue(imageInfo: {}) {
    var tupleList = Object.keys(imageInfo).map(function(key) {
      return [key, imageInfo[key]]; // returns [[key, val], ...]
    });
    // Sort [[]] structure
    tupleList.sort(function(first, second) {
      return second[1] - first[1];
    });
    // make list of only first in [(first, second), ...]
    var sortedKeys = tupleList.map(x => {return x[0]});
    console.log(sortedKeys);
    return sortedKeys;
  }

  openPhotoModal(imageName) {
    let dialogRef: ImageModalOverlayRef = this.imageModal.open({
      image: imageName
    });
    /*
    this.photoDialogRef = this.dialog.open(PhotoModalComponent, {
      maxHeight: '95vh',
      panelClass: 'my-dialog',
      data: {
        imageName: imageName
      }
    });

    this.photoDialogRef .afterClosed().subscribe(result => {
      this.router.navigate(['/photos'], { relativeTo: this.route });
    });
    */
  }

}
