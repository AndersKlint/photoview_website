import { OverlayRef } from '@angular/cdk/overlay';
import { Router, ActivatedRoute }  from '@angular/router';

export class ImageModalOverlayRef {

  constructor(private overlayRef: OverlayRef, private route: ActivatedRoute, private router: Router) { }

  close(): void {
    this.overlayRef.dispose();
    this.router.navigate(['/photos'], { relativeTo: this.route });
  }
}
