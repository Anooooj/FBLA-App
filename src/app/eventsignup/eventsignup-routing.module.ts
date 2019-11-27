import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsignupPage } from './eventsignup.page';

const routes: Routes = [
  {
    path: '',
    component: EventsignupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsignupPageRoutingModule {}
