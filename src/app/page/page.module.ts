import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageRoutingModule } from './page-routing.module';
import { ItemComponent } from '../item/item.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    ItemComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    MatTabsModule
  ],
  exports: [
    ItemComponent
  ]
})
export class PageModule { }