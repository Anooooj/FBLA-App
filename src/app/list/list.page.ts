import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;

  public items: Array<{ name: string; status: string}> = [];
  constructor(private dataService: DataService) {
    dataService.getMembers().forEach(element => {
      this.items.push({
        name: element.name,
        status: "not present"
      });
    });
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
  }


}
