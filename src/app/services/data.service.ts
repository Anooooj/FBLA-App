import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private currentUser =
  {
    school: "Great Valley High School",
    name: "Bill Skates",
    type: "administrator",
    id: 0
  };

  private events = [];
  private members = [
    {
      name: "Anuj Patel",
      type: "app creator",
      id: 0
    },
    {
      name: "Anuj Patel",
      type: "app creator",
      id: 0
    },
    {
      name: "Anuj Patel",
      type: "app creator",
      id: 0
    }
  ];
  private attendance = [];

  constructor() { }

  addEvent(event) {
    this.events.push(event);
  }

  getEvents() {
    return this.events;
  }

  getMembers() {
    return this.members;
  }

  getAttendance() {
    return this.attendance;
  }

  addAttendee(i, id) {
    this.attendance.push([i, id]);
  }

  removeAttendee(i, id) {
    var index = -1;
    for (let r = 0; r < this.attendance.length; r++) {
      if (this.attendance[r][0] == i) {
        if (this.attendance[r][1] == id) {
          index = r;
        }
      }
    }
    this.attendance.splice(index, 1);
  }

  getCurrentUser() {
    return this.currentUser;
  }

  findMemberNameByID(id) {
    for (let i = 0; i < this.members.length; i++) {
      if(id == this.members[i].id) {
        return this.members[i].name;
      }
    }
  }

}
