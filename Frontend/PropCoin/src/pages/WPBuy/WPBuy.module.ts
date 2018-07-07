import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { WPBuyPage } from './WPBuy';

@NgModule({
  declarations: [
    WPBuyPage,
  ],
  imports: [
    IonicPageModule.forChild(WPBuyPage),
  ],
  exports: [
    WPBuyPage
  ]
})
export class WPBuyPageModule { }
