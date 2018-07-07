import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { WPBuyPage } from './WPBuy';

@NgModule({
  declarations: [
    WPBuyPage,
  ],
  imports: [
    IonicPageModule.forChild(WPBuyPage),
    TranslateModule.forChild()
  ],
  exports: [
    WPBuyPage
  ]
})
export class WPBuyPageModule { }
