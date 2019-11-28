import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  data: any;

  public text: '';

  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService) {

  }

  ngOnInit() {

  }
}
