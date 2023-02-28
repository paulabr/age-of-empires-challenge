import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'home'
},
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'units',
    loadChildren: () => import('./pages/units/units.module').then((m) => m.UnitsModule)
  },
  {
    path: 'units/:id',
    loadChildren: () => import('./pages/unit-detail/unit-detail.module').then((m) => m.UnitDetailModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
