import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ModalController } from '@ionic/angular';

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
export class AppRoutingModule {

  lastUrl: string;

  constructor(
    private router: Router,
    private modalCtrl: ModalController
  ) {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((e) => { 
      const event: any = e;
      if (this.lastUrl !== event.url) {
        this.lastUrl = event.url;
        this.onRouteNavigationEnd(event);
      }
    });
  }

  /**
   * Handle a route changing to a new URL
   * @param event 
   */
  async onRouteNavigationEnd(event) {
    // close modals on route change
    if (await this.modalCtrl.getTop()) {
      this.modalCtrl.dismiss();
    }
  }
}
