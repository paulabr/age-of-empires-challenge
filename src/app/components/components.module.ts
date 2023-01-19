import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NavbarComponent} from "./navbar/navbar.component";
import {RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {UnitsService} from "./units.service";


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  exports: [
    NavbarComponent
  ]
  ,
  providers:[UnitsService]
})
export class ComponentsModule { }
