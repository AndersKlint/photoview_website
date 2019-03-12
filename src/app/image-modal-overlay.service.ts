import { Injectable } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

import { PhotoModalComponent } from './photo-modal/photo-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ImageModalOverlayService {

  constructor(private overlay: Overlay) { }

  open() {
    // OverlayRef is a PortalHost.
    // A protalhost is kinda a placeholder for a template or component.
    const overlayRef = this.overlay.create();
    const imageModalPortal = new ComponentPortal(PhotoModalComponent);
    overlayRef.attach(imageModalPortal);
  }
}
