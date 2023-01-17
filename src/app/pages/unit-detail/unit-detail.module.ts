import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnitDetailRoutingModule } from './unit-detail-routing.module';
import { UnitDetailViewComponent } from './unit-detail-view/unit-detail-view.component';


@NgModule({
  declarations: [
    UnitDetailViewComponent
  ],
  imports: [
    CommonModule,
    UnitDetailRoutingModule
  ]
})
export class UnitDetailModule { }
