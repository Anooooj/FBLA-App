import { Component, OnInit } from '@angular/core';

import {  MenuController } from '@ionic/angular';

import { DataService } from '../services/data.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(public menuCtrl: MenuController, private dataService: DataService, public navCtrl: NavController,) { }

  ionViewWillEnter() {
    if (this.dataService.getCurrentUser().id == '-1') {
      this.menuCtrl.enable(false);
    }
    else {
      this.navCtrl.navigateForward('home');
    }
  }

  ngOnInit() {
  }

}
