import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Nav, Platform } from 'ionic-angular';

import { FirstRunPage } from '../pages';
import { Settings } from '../providers';

@Component({
  template: `<ion-menu [content]="content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Menus</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-list>
      <button menuClose ion-item>
        Logout
      </button>
      <button menuClose ion-item>
        Setting
      </button>
      <button menuClose ion-item>
        Overview
      </button>
      <button menuClose ion-item>
        Language
      </button>
      <button menuClose ion-item>
        Transaction History
      </button>
      <button menuClose ion-item>
        Transfer(PPC-to-PPC)
      </button>
      <button menuClose ion-item>
        Exchange(HKD-to-PPC)
      </button>
    </ion-list>

  </ion-menu>
  <ion-nav #content [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = FirstRunPage;

  @ViewChild(Nav) nav: Nav;

  pages: any[] = [
    { title: 'Landing', component: 'LandingPage' },
    { title: 'Homepage', component: 'HomePage' },
    { title: 'Overview', component: 'OverviewPage' },
    { title: 'Wallet', component: 'WalletPage' },
    { title: 'Content', component: 'ContentPage' },
    { title: 'Master Detail', component: 'ListMasterPage' },
    { title: 'Menu', component: 'MenuPage' },
    { title: 'Transfer', component: 'TransferPage' },
    { title: 'TradeConfirmation', component: 'TradeConfirmationPage' }
  ]

  constructor(platform: Platform, settings: Settings, private statusBar: StatusBar, private splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  
  openHomePage(){
    this.nav.push('HomePage');
  }

  openOverview(){
    this.nav.push('Overview');
  }
}
