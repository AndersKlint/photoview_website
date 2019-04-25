import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule, MatIconModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule
  ],
  exports:
  [
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule
  ]
})
export class MaterialModule {}
