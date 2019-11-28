import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventattendancePageRoutingModule } from './eventattendance-routing.module';

import { EventattendancePage } from './eventattendance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventattendancePageRoutingModule
  ],
  declarations: [EventattendancePage]
})
export class EventattendancePageModule {}
