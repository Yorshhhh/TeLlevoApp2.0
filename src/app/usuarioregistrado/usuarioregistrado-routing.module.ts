import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioregistradoPage } from './usuarioregistrado.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioregistradoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioregistradoPageRoutingModule {}
