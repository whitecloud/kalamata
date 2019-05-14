import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'screenings-list',
    pathMatch: 'full' },
  {
    path: 'screenings-list',
    loadChildren: './pages/screenings-list/screenings-list.module#ScreeningsListPageModule'
  },
  {
    path: 'style-guide',
    loadChildren: './pages/style-guide/style-guide.module#StyleGuidePageModule'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
