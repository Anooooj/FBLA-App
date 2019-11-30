import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss']
})
export class SigninPage implements OnInit {
  school;
  name;
  password;
  constructor(public navCtrl: NavController, private dataService: DataService) { }

  ngOnInit() {
  }

  toSignUp() {
    this.navCtrl.navigateForward('signup')
  }

  checkValuesIfSchoolSet() {
    console.log(document.querySelector('#fullname'));
    this.dataService.getMembers().forEach(member => {
      if(document.querySelector('#fullname') == member.name) {
        if(document.querySelector('#password') == member.password) {
          this.dataService.setCurrentUser(document.querySelector('#school'), member.name, member.type, member.id);
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
