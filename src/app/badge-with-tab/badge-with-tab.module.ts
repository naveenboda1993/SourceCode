import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BadgeWithTabPage } from './badge-with-tab.page';

const routes: Routes = [
  {
    path: 'badge-with-tab',
    component: BadgeWithTabPage,
    children: [
      {
        path: 'badge-movie',
        loadChildren: () => import('../badge-movie/badge-movie.module').then(x => x.BadgeMoviePageModule)
      },
      {
        path: 'badge-card',
        loadChildren: () => import('../badge-card/badge-card.module').then(x => x.BadgeCardPageModule)

      },
      {
        path: 'badge-setting',
        loadChildren: () => import('../badge-setting/badge-setting.module').then(x => x.BadgeSettingPageModule)

      }
    ]
  },
  {
    path: '',
    redirectTo: 'badge-with-tab/badge-setting',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BadgeWithTabPage]
})
export class BadgeWithTabPageModule { }
