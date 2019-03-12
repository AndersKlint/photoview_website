import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdcImageListModule, MdcIconModule } from '@angular-mdc/web';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhotoGridComponent } from './photo-grid/photo-grid.component';
import { AboutViewComponent } from './about-view/about-view.component';
import { NgxMasonryModule } from 'ngx-masonry';
import { OverlayModule } from '@angular/cdk/overlay';
import { PhotoModalComponent } from './photo-modal/photo-modal.component';
import { ImageModalOverlayService } from './image-modal-overlay.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PhotoGridComponent,
    AboutViewComponent,
    PhotoModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MdcImageListModule,
    NgxMasonryModule
  ],
  providers: [ImageModalOverlayService],
  bootstrap: [AppComponent],
  entryComponents: [PhotoModalComponent]
})
export class AppModule { }
