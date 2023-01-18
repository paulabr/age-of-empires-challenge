import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnitsRoutingModule } from './units-routing.module';
import { UnitsViewComponent } from './units-view/units-view.component';
import {MatTableModule} from "@angular/material/table";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatListModule} from "@angular/material/list";
import {MatSliderModule} from "@angular/material/slider";
import {FlexLayoutModule} from "@angular/flex-layout";


@NgModule({
  declarations: [
    UnitsViewComponent
  ],
  imports: [
    CommonModule,
    UnitsRoutingModule,
    MatTableModule,
    MatButtonToggleModule,
    MatListModule,
    MatSliderModule,
    FlexLayoutModule
  ]
})
export class UnitsModule { }
