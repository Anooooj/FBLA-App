import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data = [];
  private events = [];
  private members = [
    {
      name: "Anuj Patel",
      note: "app creator"
    },
    {
      name: "Anuj Patel",
      note: "app creator"
    },
    {
      name: "Anuj Patel",
      note: "app creator"
    }
  ];

  constructor() { }

  setData(id, data) {
    this.data[id] = data;
  }

  getData(id) {
    return this.data[id];
  }

  addEvent(event) {
    this.events.push(event);
  }

  getEvents() {
    return this.events;
  }

  getMembers() {
    return this.members;
  }

}