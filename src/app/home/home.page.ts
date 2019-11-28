import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, public navCtrl: NavController, private dataService: DataService) { }

  ngOnInit() {
  }

  user = {
    name: 'Simon Grimm',
    website: 'www.ionicacademy.com',
    address: {
      zip: 48149,
      city: 'Muenster',
      country: 'DE'
    },
    interests: [
      'Ionic', 'Angular', 'YouTube', 'Sports'
    ]
  };

  openDetailsWithService() {
    this.dataService.setData(0, this.user);
    this.router.navigateByUrl('/details/0');
  }
}
