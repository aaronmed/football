import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'teams',
    loadChildren: () => import('./teams/teams.module').then( m => m.TeamsPageModule)
  },
  {
    path: 'players',
    loadChildren: () => import('./players/players.module').then( m => m.PlayersPageModule)
  },
  {
    path: 'add-player',
    loadChildren: () => import('./add-player/add-player.module').then( m => m.AddPlayerPageModule)
  },
  {
    path: 'update-player',
    loadChildren: () => import('./update-player/update-player.module').then( m => m.UpdatePlayerPageModule)
  },
  {
    path: 'add-team',
    loadChildren: () => import('./add-team/add-team.module').then( m => m.AddTeamPageModule)
  },
  {
    path: 'update-team',
    loadChildren: () => import('./update-team/update-team.module').then( m => m.UpdateTeamPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
