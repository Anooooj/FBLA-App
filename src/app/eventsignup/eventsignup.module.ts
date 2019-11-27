import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventsignupPageRoutingModule } from './eventsignup-routing.module';

import { EventsignupPage } from './eventsignup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventsignupPageRoutingModule
  ],
  declarations: [EventsignupPage]
})
export class EventsignupPageModule {}
