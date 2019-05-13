import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public sideNav = [
    {
      title: 'Dashboard',
      icon: 'md-speedometer',
      expanded: true,
      children: [
        {
          title: 'Population Dashboard'
        },
        {
          title: 'Caseload Dashboard'
        }
      ]
    },
    {
      title: 'Members',
      icon: 'md-people',
      expanded: true,
      children: [
        {
          title: 'Demographics'
        },
        {
          title: 'Registries'
        },
        {
          title: 'Member List'
        }
      ]
    },
    {
      title: 'Risk',
      icon: 'ios-warning',
      expanded: true,
      children: [
        {
          title: 'HCC Score Comparison'
        },
        {
          title: 'High Risk Members'
        }
      ]
    },
    {
      title: 'Prescription',
      icon: 'ios-medkit',
      expanded: true,
      children: [
        {
          title: 'Prescription Performance'
        },
        {
          title: 'Members with 10+ Medications'
        }
      ]
    },
    {
      title: 'Performance',
      icon: 'md-trending-up',
      expanded: true,
      children: [
        {
          title: 'Utilizartion'
        },
        {
          title: 'YTD Financial'
        },
        {
          title: 'Care Management'
        },
        {
          title: 'Metrics'
        }
      ]
    },
    {
      title: 'Provider',
      icon: 'md-person',
      expanded: true,
      children: [
        {
          title: 'Provider List'
        },
        {
          title: 'Network Usage'
        }
      ]
    },
    {
      title: 'User Guide'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
