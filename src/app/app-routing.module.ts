import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*
const routes: Routes = [
  { path: '', redirectTo: 'tabs', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'appareils', loadChildren: './appareils/appareils.module#AppareilsPageModule' },
  { path: 'single-appareil', loadChildren: './single-appareil/single-appareil.module#SingleAppareilPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
];*/

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'appareils', loadChildren: './appareils/appareils.module#AppareilsPageModule' },
  { path: 'single-appareil', loadChildren: './single-appareil/single-appareil.module#SingleAppareilPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
