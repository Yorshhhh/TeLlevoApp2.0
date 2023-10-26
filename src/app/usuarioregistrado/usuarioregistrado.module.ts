import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioregistradoPageRoutingModule } from './usuarioregistrado-routing.module';

import { UsuarioregistradoPage } from './usuarioregistrado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioregistradoPageRoutingModule
  ],
  declarations: [UsuarioregistradoPage]
})
export class UsuarioregistradoPageModule {}
