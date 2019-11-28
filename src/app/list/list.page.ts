import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;

  public items: Array<{ name: string; status: string}> = this.dataService.getCurrentGenericAttendance();
  constructor(private dataService: DataService) {

  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }

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
    this.dataService.setCurrentGenericAttendance(this.items);
  }


}
