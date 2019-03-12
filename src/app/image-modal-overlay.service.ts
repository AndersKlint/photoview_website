import {  Injectable, Inject, OnInit, Injector, ComponentRef  } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';

import { PhotoModalComponent } from './photo-modal/photo-modal.component';
import { ImageModalOverlayRef } from './image-modal-overlay-ref';
import { IMAGE_MODAL_DIALOG_DATA } from './image-modal-overlay.tokens';
import { Router, ActivatedRoute }  from '@angular/router';

interface ImageModalOverlayConfig {
  hasBackdrop?: boolean;
  backdropClass?: string;
  panelClass?: string;
  image?: string;
}

const DEFAULT_CONFIG: ImageModalOverlayConfig = {
  hasBackdrop: true,
  backdropClass: 'dark-backdrop',
  panelClass: 'tm-file-preview-dialog-panel',
  image: ''
}

@Injectable({
  providedIn: 'root'
})
export class ImageModalOverlayService {

  constructor(private overlay: Overlay, private injector: Injector, private route: ActivatedRoute, private router: Router) { }

  open(config: ImageModalOverlayConfig = {}) {
    const dialogConfig = { ...DEFAULT_CONFIG, ...config };
    const overlayRef = this.createOverlay(dialogConfig);

    // Used to control modal from otehr component, e.g. close it .
    const dialogRef = new ImageModalOverlayRef(overlayRef, this.route, this.router);

    // OverlayRef is a PortalHost.
    // A protalhost is kinda a placeholder for a template or component.
    const imageModalPortal = new ComponentPortal(PhotoModalComponent);
    const overlayComponent = this.attachDialogContainer(overlayRef, dialogConfig, dialogRef);

    overlayRef.backdropClick().subscribe(_ => dialogRef.close());

    return dialogRef;
  }

  private createOverlay(config: ImageModalOverlayConfig) {
    const overlayConfig = this.getOverlayConfig(config);
    return this.overlay.create(overlayConfig);
  }

  private getOverlayConfig(config: ImageModalOverlayConfig): OverlayConfig {
    const positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();

    const overlayConfig = new OverlayConfig({
      hasBackdrop: config.hasBackdrop,
      backdropClass: config.backdropClass,
      panelClass: config.panelClass,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy
    });

    return overlayConfig;
  }

  private attachDialogContainer(overlayRef: OverlayRef, config: ImageModalOverlayConfig, dialogRef: ImageModalOverlayRef) {
    const injector = this.createInjector(config, dialogRef);
    const containerPortal = new ComponentPortal(PhotoModalComponent, null, injector);
    const containerRef: ComponentRef<PhotoModalComponent> = overlayRef.attach(containerPortal);
    return containerRef.instance;
  }

  private createInjector(config: ImageModalOverlayConfig, dialogRef: ImageModalOverlayRef): PortalInjector {
    // Instantiate new WeakMap for our custom injection tokens
    const injectionTokens = new WeakMap();

    // Set custom injection tokens
    injectionTokens.set(ImageModalOverlayRef, dialogRef);
    injectionTokens.set(IMAGE_MODAL_DIALOG_DATA, config.image);

    // Instantiate new PortalInjector
    return new PortalInjector(this.injector, injectionTokens);
  }
}
