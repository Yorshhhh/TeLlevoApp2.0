import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SavepassPageRoutingModule } from './savepass-routing.module';

import { SavepassPage } from './savepass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SavepassPageRoutingModule
  ],
  declarations: [SavepassPage]
})
export class SavepassPageModule {}
