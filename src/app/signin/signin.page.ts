import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  var school '';

  constructor(public navCtrl: NavController, private dataService: DataService) { }

  ngOnInit() {
  }

  toSignUp() {
    this.navCtrl.navigateForward('signup')
  }

  checkValuesIfSchoolSet(name, password) {
    this.dataService.getMembers().forEach(member => {
      if(member.name == name) {
        if(member.password == password) {
          this.dataService.setCurrentUser(this.school, member.name, member.type, member.id);
        }
      }
    });
  }

}
