import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidacionPageRoutingModule } from './validacion-routing.module';

import { ValidacionPage } from './validacion.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValidacionPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [ValidacionPage],
})
export class ValidacionPageModule {}
