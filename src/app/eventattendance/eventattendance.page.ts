import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-eventattendance',
  templateUrl: './eventattendance.page.html',
  styleUrls: ['./eventattendance.page.scss'],
})

export class EventattendancePage implements OnInit {

  public disabled = true;

  public items: Array<{ name: string; status: string}> = [];

  constructor(private dataService: DataService) {
    this.dataService.getAttendance().forEach(element => {
      if(element[0] == this.dataService.getCurrentEventID()) {
        this.items.push({
          name: this.dataService.findMemberNameByID(element[1]),
          status: "attending"
        });
      }
    });
    this.dataService.getMembers().forEach(member => {
      var present = false;
      this.items.forEach(attendee => {
        if (member.name == attendee.name) {
          present = true;
        }
      });
      if (present == false) {
        this.items.push({
          name: member.name,
          status: "not attending"
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


}
