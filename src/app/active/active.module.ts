import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { IonicModule } from '@ionic/angular';

import { ActivePageRoutingModule } from './active-routing.module';

import { ActivePage } from './active.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ActivePageRoutingModule,
    HttpClientModule,
    NgxDatatableModule
  ],
  declarations: [ActivePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class ActivePageModule {}



