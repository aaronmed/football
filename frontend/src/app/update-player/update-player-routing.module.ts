import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatePlayerPage } from './update-player.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatePlayerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatePlayerPageRoutingModule {}
