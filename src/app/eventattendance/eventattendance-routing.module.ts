import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventattendancePage } from './eventattendance.page';

const routes: Routes = [
  {
    path: '',
    component: EventattendancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventattendancePageRoutingModule {}
