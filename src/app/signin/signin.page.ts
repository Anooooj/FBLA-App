import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss']
})
export class SigninPage implements OnInit {
  school: string = "";
  name: string = "";
  password: string = "";

  error = '';
  constructor(public navCtrl: NavController, private dataService: DataService, public menuCtrl: MenuController, private storage: Storage
  ) { }

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
      if(this.school == member.school) {
        if(this.name == member.name) {
          if(this.password == member.password) {
            this.dataService.setCurrentUser(member.school, member.name, member.type, member.id);
            this.error = '';
            this.menuCtrl.enable(true);
            this.navCtrl.navigateForward('home');
          }
          else {
            this.error = 'Invalid login';
          }
        }
        else {
          this.error = 'Invalid login';
        }
      }
      else {
        this.error = 'Invalid login';
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
