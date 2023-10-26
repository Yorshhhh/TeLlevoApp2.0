import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagusuarioPageRoutingModule } from './pagusuario-routing.module';

import { PagusuarioPage } from './pagusuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagusuarioPageRoutingModule
  ],
  declarations: [PagusuarioPage]
})
export class PagusuarioPageModule {}
