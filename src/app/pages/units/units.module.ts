import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnitsRoutingModule } from './units-routing.module';
import { UnitsViewComponent } from './units-view/units-view.component';
import {MatTableModule} from "@angular/material/table";


@NgModule({
  declarations: [
    UnitsViewComponent
  ],
    imports: [
        CommonModule,
        UnitsRoutingModule,
        MatTableModule
    ]
})
export class UnitsModule { }
