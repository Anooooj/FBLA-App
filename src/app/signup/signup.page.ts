import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {



  //myForm: FormGroup;

  constructor(private fb: FormBuilder, public menuCtrl: MenuController) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
    //this.myForm = this.fb.group({
    //  email: '',
    //  message: ''
    //})
  }
  //registrationForm = this.formBuilder.group







}
