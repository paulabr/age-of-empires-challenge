import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UnitsViewComponent} from "./units-view/units-view.component";

const routes: Routes = [{
  path: '',
  component: UnitsViewComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnitsRoutingModule { }
