import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnitDetailRoutingModule } from './unit-detail-routing.module';
import { UnitDetailViewComponent } from './unit-detail-view/unit-detail-view.component';
import {MatTableModule} from "@angular/material/table";
import {FlexModule} from "@angular/flex-layout";


@NgModule({
  declarations: [
    UnitDetailViewComponent
  ],
  imports: [
    CommonModule,
    UnitDetailRoutingModule,
    MatTableModule,
    FlexModule
  ]
})
export class UnitDetailModule { }
