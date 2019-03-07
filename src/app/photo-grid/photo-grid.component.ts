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

// Child routing tutorial (for modal): https://medium.com/ngconf/routing-to-angular-material-dialogs-c3fb7231c177
export class PhotoGridComponent implements OnInit, OnDestroy {
  imageNames: string[] = [];
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
    this.imageNames = this.getImageNames();
  }

  ngOnDestroy() {
    this.routeQueryParams$.unsubscribe();
  }

  getImageNames(): string[] {
    var imageNames: string[] = [];
    this.imageService.getFilenames().subscribe(res => {
          res.forEach(filename => {
            imageNames.push(filename);
          });
        },
        console.error
      );
    return imageNames;
  }

  openPhotoModal(imageName) {
    this.photoDialogRef = this.dialog.open(PhotoModalComponent, {
      maxHeight: '95vh',
      data: {
        imageName: imageName
      }
    });

    this.photoDialogRef .afterClosed().subscribe(result => {
      this.router.navigate(['/photos'], { relativeTo: this.route });
    });
  }

}
