import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule
  ],
  exports: [
    MatSlideToggleModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule
  ]
})
export class MatModule { }
