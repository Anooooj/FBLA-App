import { Component, OnInit } from '@angular/core';

import { MenuController } from '@ionic/angular';

import { DataService } from '../services/data.service';
import { NavController } from '@ionic/angular';

import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(public menuCtrl: MenuController, private dataService: DataService, public navCtrl: NavController, private storage: Storage) { }

  ionViewWillEnter() {
    if (this.dataService.getTos() == false) {
      this.menuCtrl.enable(false);
      this.navCtrl.navigateForward('tos');
    }
    else {
      this.storage.get('currentUser').then((val) => {
        if (val.id == -1) {
          this.menuCtrl.enable(false);
        }
        else {
          this.navCtrl.navigateForward('home');
        }
      });
    }
  }

  ngOnInit() {
  }

}
