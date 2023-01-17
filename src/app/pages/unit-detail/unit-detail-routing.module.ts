import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UnitDetailViewComponent} from "./unit-detail-view/unit-detail-view.component";

const routes: Routes = [{
  path: '',
  component: UnitDetailViewComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnitDetailRoutingModule { }
