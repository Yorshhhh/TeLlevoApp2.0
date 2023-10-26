import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipopersonaPageRoutingModule } from './tipopersona-routing.module';

import { TipopersonaPage } from './tipopersona.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipopersonaPageRoutingModule
  ],
  declarations: [TipopersonaPage]
})
export class TipopersonaPageModule {}
