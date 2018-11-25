import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatToolbarModule,
  MAT_LABEL_GLOBAL_OPTIONS,
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
  ],
  providers: [
    { provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: { float: 'never' } }
  ]
})
export class AngularMaterialModule { }
