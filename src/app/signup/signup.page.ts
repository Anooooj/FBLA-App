import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {



  myForm: FormGroup;



  ngOnInit() {
    this.myForm = this.fb.group({
      email: '',
      message: ''
    })
  }

    constructor(private fb: FormBuilder) { }

  registrationForm = this.formBuilder.group


}
