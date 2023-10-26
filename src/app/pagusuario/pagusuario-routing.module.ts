import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagusuarioPage } from './pagusuario.page';

const routes: Routes = [
  {
    path: '',
    component: PagusuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagusuarioPageRoutingModule {}
