import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.page.html',
  styleUrls: ['./chapter.page.scss'],
})
export class ChapterPage implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  // this.validations_form = this.formBuilder.group({
	// school: new FormControl('', Validators.required),
  // });
  //
  // validation_messages = {
  //   'school': [
	// 	    { type: 'required', message: 'School is required.' }
  //   ]
}
