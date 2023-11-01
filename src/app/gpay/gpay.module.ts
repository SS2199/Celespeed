import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { GooglePayButtonModule } from '@google-pay/button-angular';

import { GpayPageRoutingModule } from './gpay-routing.module';

import { GpayPage } from './gpay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GooglePayButtonModule,
    GpayPageRoutingModule
  ],
  declarations: [GpayPage]
})
export class GpayPageModule {}
