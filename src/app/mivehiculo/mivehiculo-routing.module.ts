import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MivehiculoPage } from './mivehiculo.page';

const routes: Routes = [
  {
    path: '',
    component: MivehiculoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MivehiculoPageRoutingModule {}
