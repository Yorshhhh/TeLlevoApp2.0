import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrouserPageRoutingModule } from './registrouser-routing.module';

import { RegistrouserPage } from './registrouser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrouserPageRoutingModule
  ],
  declarations: [RegistrouserPage]
})
export class RegistrouserPageModule {}
