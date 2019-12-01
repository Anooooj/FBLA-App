import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss']
})
export class SigninPage implements OnInit {
  school: string = "";
  name: string = "";
  password: string = "";
  constructor(public navCtrl: NavController, private dataService: DataService, public menuCtrl: MenuController, private storage: Storage) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  toSignUp() {
    this.navCtrl.navigateForward('join');
  }

  checkValuesIfSchoolSet() {
    this.dataService.getMembers().forEach(member => {
      if(this.name == member.name) {
        if(this.password == member.password) {
          this.dataService.setCurrentUser(this.school, member.name, member.type, member.id);
          //this.menuCtrl.enable(true);
          this.navCtrl.navigateForward('home');
        }
      }
    });
  }

  // NOT CHECKING SCHOOLS
  // checkValuesIfSchoolSet() {
  //   this.dataService.getMembers().forEach(member => {
  //     if(member.name == this.name) {
  //       if(member.password == this.password) {
  //         this.dataService.setCurrentUser(this.school, member.name, member.type, member.id);
  //       }
  //     }
  //   });
  // }

}
