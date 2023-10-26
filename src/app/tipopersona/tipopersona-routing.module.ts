import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipopersonaPage } from './tipopersona.page';

const routes: Routes = [
  {
    path: '',
    component: TipopersonaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipopersonaPageRoutingModule {}
