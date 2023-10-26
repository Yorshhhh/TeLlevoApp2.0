import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MivehiculoPageRoutingModule } from './mivehiculo-routing.module';

import { MivehiculoPage } from './mivehiculo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MivehiculoPageRoutingModule
  ],
  declarations: [MivehiculoPage]
})
export class MivehiculoPageModule {}
