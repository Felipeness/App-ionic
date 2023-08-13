import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Erro404Page } from './erro404.page';

const routes: Routes = [
  {
    path: '',
    component: Erro404Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Erro404PageRoutingModule {}
