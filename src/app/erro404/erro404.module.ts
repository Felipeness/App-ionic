import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Erro404PageRoutingModule } from './erro404-routing.module';

import { Erro404Page } from './erro404.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Erro404PageRoutingModule
  ],
  declarations: [Erro404Page]
})
export class Erro404PageModule {}
