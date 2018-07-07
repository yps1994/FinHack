import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { MainPage } from '../';

export interface RegionalDataTrend {
  region: string;
  upDownArrowIndex: number;
  index: number;
  percentageChange: number;
}

@IonicPage()
@Component({
  selector: 'page-homepage',
  templateUrl: 'homepage.html'
})
export class HomePage {

  regionalDataTrend: RegionalDataTrend[];

  constructor(public navCtrl: NavController) {
    this.regionalDataTrend = [
      {
        region: "Hong Kong Island",
        upDownArrowIndex: 1,
        index: 180239,
        percentageChange: 15.6,
      },
      {
        region: "Kowloon",
        upDownArrowIndex: 0,
        index: 151856,
        percentageChange: 0,
      },
      {
        region: "New Terrotories",
        upDownArrowIndex: -1,
        index: 141659,
        percentageChange: -10.31,
      }
    ]
  }

  loadArrowFromIndex(index: number) {
    if (index >= 1.0) {
      return "assets/imgs/upward-arrow.png";
    }
    else if (index <= -1.0) {
      return "assets/imgs/downward-arrow.png";
    }

    return "assets/imgs/no-change.png";
  }

  doLogin() {
    this.gotoMainPage();
  }

  createWallet() {
    this.gotoMainPage();
  }
  
  gotoMainPage() {
    this.navCtrl.push(MainPage);
  }
}
