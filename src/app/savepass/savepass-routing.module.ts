import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SavepassPage } from './savepass.page';

const routes: Routes = [
  {
    path: '',
    component: SavepassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SavepassPageRoutingModule {}
