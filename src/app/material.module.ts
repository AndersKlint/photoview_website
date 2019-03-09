import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule, MatIconModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule
  ],
  exports:
  [
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule
  ]
})
export class MaterialModule {}
