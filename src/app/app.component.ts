import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { DataService } from './services/data.service';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {
  public appPages = [];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private dataService: DataService,
    private storage: Storage
  ) {
    this.appPages = [{
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'About',
      url: '/about',
      icon: 'help'
    },
    {
      title: 'Chapter Information',
      url: '/chapter',
      icon: 'school'
    },
    {
      title: 'Calendar',
      url: '/calendar',
      icon: 'calendar'
    },
    {
      title: 'Attendance',
      url: '/list',
      icon: 'list'
    }];
    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  signOut() {
    this.dataService.setCurrentUser(
      "",
      "",
      "member",
      -1
    );
  }
}
