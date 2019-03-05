import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { PhotoModalComponent } from '../photo-modal/photo-modal.component';
import { ImageService } from '../image.service';
import { ActivatedRoute, Router }  from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-photo-grid',
  templateUrl: './photo-grid.component.html',
  styleUrls: ['./photo-grid.component.scss']
})
export class PhotoGridComponent implements OnInit, OnDestroy {
  images: string[] = [];
  photoDialogRef: MatDialogRef<PhotoModalComponent>;
  routeQueryParams$: Subscription;

  constructor(private dialog: MatDialog, private imageService: ImageService, private route: ActivatedRoute, private router: Router) {
    this.routeQueryParams$ = route.queryParams.subscribe(params => {
      if (params['img']) {
        this.openPhotoModal(params['img']);
      }
    });
  }

  ngOnInit() {
    this.images = this.imageService.getThumbnails();
  }

  ngOnDestroy() {
    this.routeQueryParams$.unsubscribe();
  }

  openPhotoModal(image) {
    this.photoDialogRef = this.dialog.open(PhotoModalComponent, {
      maxHeight: '95vh',
      data: {
        image: image
      }
    });

    this.photoDialogRef .afterClosed().subscribe(result => {
      this.router.navigate(['/photos'], { relativeTo: this.route });
    });
  }

}
