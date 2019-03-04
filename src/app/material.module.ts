import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports:
  [
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class MaterialModule {}
