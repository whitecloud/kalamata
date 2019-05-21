import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Icons } from './components/icon/icons.enum';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public sideNav: any = [
    {
      title: 'Solutions',
      children: [
        {
          title: 'Dashboard',
          icon: Icons.leftNavDashboard,
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
          icon: Icons.leftNavPeople,
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
            },
            {
              title: 'Metabolic Screenings',
              route: 'screenings-list'
            }
          ]
        },
        {
          title: 'Risk',
          icon: Icons.leftNavRisk,
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
          title: 'Prescriptions',
          icon: Icons.leftNavDrug,
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
          icon: Icons.leftNavFinancial,
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
          title: 'Provider List',
          icon: Icons.leftNavProvider
        }
      ]
    },
    {
      title: 'Help',
      children: [
        {
          title: 'Quick Start',
          icon: Icons.leftNavConnect
        },
        {
          title: 'User Guide',
          icon: Icons.leftNavConnect,
          href: 'https://reporting.analytics.relias.com/ReportServer?/Kalamata/DEMO_Kalamata/Reports/Relias%20User%20Guide.pdf'
        }
      ]
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
    if (location.href.includes('localhost')) {
      this.sideNav[1].children.push({
        title: 'Dev Style Guide',
        icon: Icons.leftNavAssessments,
        route: 'style-guide'
      });
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
