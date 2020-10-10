import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPlayerPageRoutingModule } from './add-player-routing.module';

import { AddPlayerPage } from './add-player.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddPlayerPageRoutingModule
  ],
  declarations: [AddPlayerPage]
})
export class AddPlayerPageModule {}
