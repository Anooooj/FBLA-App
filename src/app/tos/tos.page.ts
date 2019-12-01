import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';
import { NavController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tos',
  templateUrl: './tos.page.html',
  styleUrls: ['./tos.page.scss'],
})
export class TosPage implements OnInit {

  constructor(public menuCtrl: MenuController, private dataService: DataService, public navCtrl: NavController) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
  }

  continue() {
    this.dataService.agreeToTOS();
  }

}
