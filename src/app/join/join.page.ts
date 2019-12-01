import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MenuController } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-join',
  templateUrl: 'join.page.html',
  styleUrls: ['join.page.scss'],
})
export class JoinPage {

  error = '';

  constructor(private formBuilder: FormBuilder, public menuCtrl: MenuController, private dataService: DataService) {
  }

  registrationForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(100)]],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')
      ]
    ],
    phone: [
      '',
      [
        Validators.required,
        Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$')
      ]
    ],
    // password: [
    //   '',
    //   [
    //     Validators.required,
    //     Validators.minLength(5),
    //     Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$'),
    //   ]
    ],
    school: [
      '',
      [
        Validators.required,
      ]
    ],
    gender: [
      '',
      [
        Validators.required,
      ]
    ],
    race: [
      '',
      [
        Validators.required,
      ]
    ],
    // address: this.formBuilder.group({
    //   street: ['', [Validators.required, Validators.maxLength(100)]],
    //   city: ['', [Validators.required, Validators.maxLength(100)]],
    //   state: ['', [Validators.required, Validators.maxLength(100)]],
    //   zip: [
    //     '',
    //     [Validators.required, Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')]
    //   ]
    // })
  });

  get name() {
    return this.registrationForm.get('name');
  }
  get email() {
    return this.registrationForm.get('email');
  }
  get phone() {
    return this.registrationForm.get('phone');
  }
  // get street() {
  //   return this.registrationForm.get('street');
  // }
  // get city() {
  //   return this.registrationForm.get('city');
  // }
  // get State() {
  //   return this.registrationForm.get('state');
  // }
  // get zip() {
  //   return this.registrationForm.get('zip');
  // }
  var link = document.getElementById('getNumber'); // Gets the link
link.onclick = getNumber; // Runs the function on click

function getNumber() {
    var minNumber = 0; // The minimum number you want
    var maxNumber = 100; // The maximum number you want
    var randomnumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber); // Generates random number
    $('#myNumber').html(randomnumber); // Sets content of <div> to number
    return false; // Returns false just to tidy everything up
}
  public errorMessages = {
      name: [
        { type: 'required', message: 'Name is required' },
        { type: 'maxlength', message: 'Name cannot be longer than 100 characters' }
      ],
      email: [
        { type: 'required', message: 'Email is required' },
        { type: 'pattern', message: 'Please enter a valid email address' }
      ],
      phone: [
        { type: 'required', message: 'Phone number is required' },
        { type: 'pattern', message: 'Please enter a valid phone number' }
      ],
      password: [
        // { type: 'required', message: 'Password is required' },
        // { type: 'minlength', message : 'Password cannot be shorter than 5 characters' },
        // { type: 'pattern', message: 'Password must contain letters (uppercase and lowercase), numbers, and special characters' }
      ],
      school: [
        { type: 'required', message: 'School is required' },
      ],
      street: [
        { type: 'required', message: 'Street name is required' },
        {
          type: 'maxlength',
          message: 'Street name cant be longer than 100 characters'
        }
      ],
      city: [
        { type: 'required', message: 'City name is required' },
        {
          type: 'maxlength',
          message: 'City name cant be longer than 100 characters'
        }
      ],
      state: [
        { type: 'required', message: 'State is required' },
        {
          type: 'maxlength',
          message: 'State cant be longer than 100 characters'
        }
      ],
      zip: [
        { type: 'required', message: 'Zip code is required' },
        {
          type: 'pattern',
          message: 'Please enter a valid zip code'
        }
      ]
    };

    public signup()
    {
      var taken = false;
      this.dataService.getMembers().forEach(member => {
        if (member.name == this.registrationForm.value.name && member.school == this.registrationForm.value.school) {
          taken = true;
          this.error = 'Account has already been created.';
        }
      });
      if (taken == false) {
        this.dataService.addMember({name: this.registrationForm.value.name, type: 'member', school: this.registrationForm.value.name, id: this.dataService.getMembers().length, password: this.registrationForm.value.password});
        this.error = '';
      }
    }

    ionViewWillEnter() {
      this.menuCtrl.enable(false);
    }
}
