import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss']
})
export class SigninPage implements OnInit {
  school: string = "";
  name: string = "";
  password: string = "";
  constructor(public navCtrl: NavController, private dataService: DataService) { }

  ngOnInit() {
  }

  toSignUp() {
    this.navCtrl.navigateForward('signup')
  }

  checkValuesIfSchoolSet() {
    this.dataService.getMembers().forEach(member => {
      if(this.name == member.name) {
        if(this.password == member.password) {
          this.dataService.setCurrentUser(this.school, member.name, member.type, member.id);
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
