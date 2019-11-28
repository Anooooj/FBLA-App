import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  openItem(item) {
    this.selectedItem = item;
  }

  buttonClicked(i) {
    if (this.items[i].status == "present") {
      this.items[i].status = "not present";
    }
    else {
      this.items[i].status = "present";
    }
  }
}
