import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';

import { ContentRoutingModule } from './content-routing.module';
import { MatModule } from '../mat/mat.module';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule, ContentRoutingModule,
    MatModule,
  ],
  exports: [
    MainComponent
  ]
})
export class ContentModule { }
