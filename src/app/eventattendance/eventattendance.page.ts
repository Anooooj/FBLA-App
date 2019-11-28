import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-eventattendance',
  templateUrl: './eventattendance.page.html',
  styleUrls: ['./eventattendance.page.scss'],
})

export class EventattendancePage implements OnInit {

  public items: Array<{ name: string; status: string}> = [];

  constructor(private dataService: DataService) {
    this.dataService.getAttendance().forEach(element => {
      if(element[0] = this.dataService.getCurrentEventID()) {
        this.items.push({
          name: this.dataService.findMemberNameByID(element[1]),
          status: "not present"
        });
      }
    });
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }

  buttonClicked(i) {
    if (this.items[i].status == "present") {
      this.items[i].status = "not present";
    }
    else {
      this.items[i].status = "present";
    }
    //this.dataService.setCurrentGenericAttendance(this.items);
  }


}
