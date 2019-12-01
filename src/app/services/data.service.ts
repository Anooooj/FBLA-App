import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { MenuController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // BECAUSE OF REASONS: EVENT ID IS EVENT INDEX, EVENT IDS CANNOT BE THE SAME, EVENT NAMES CANNOT BE THE SAME, USER NAMES CANNOT BE THE SAME, USER IDS CANNOT BE THE SAME, USER ID IS USER INDEX
  // FOR THESE REASONS, USER NAMES SHOULD INCLUDE LAST NAME SINCE IT PREVENTS SAME NAME ERROR

  private tos = false;

  private school = [];

  private currentUser =
  {
    school: "",
    name: "",
    type: "member",
    id: -1
  };

  private currentEventID = -1;
  private events = [];
  private members = [
    {
      name: "David",
      type: "administrator",
      id: 0,
      password: ''
    },
    {
      name: "Johnathan",
      type: "administrator",
      id: 1,
      password: ''
    },
    {
      name: "Nathanial",
      type: "administrator",
      id: 2,
      password: ''
    },
    {
      name: "Sean",
      type: "administrator",
      id: 3,
      password: ''
    },
    {
      name: "Conner",
      type: "administrator",
      id: 4,
      password: ''
    },
    {
      name: "Vanarcheck",
      type: "administrator",
      id: 5,
      password: ''
    },
    {
      name: "Anuj",
      type: "member",
      id: 6,
      password: ''
    },
    {
      name: "Akul",
      type: "member",
      id: 7,
      password: ''
    },
    {
      name: "Sravan",
      type: "member",
      id: 8,
      password: ''
    }
  ];
  private attendance = [];
  private currentGenericAttendance = [];

  constructor(private storage: Storage) {
    this.members.forEach(element => {
      this.currentGenericAttendance.push({
        name: element.name,
        status: "not present"
      });
    });

    //this.storage.set('currentGenericAttendance', this.currentGenericAttendance);
    this.storage.get('currentGenericAttendance').then((val) => {
      if(val) {
        this.currentGenericAttendance = val;
      }
      else {
        this.storage.set('currentGenericAttendance', this.currentGenericAttendance);
      }
    });
    //this.storage.set('currentUser', this.currentUser);
    this.storage.get('currentUser').then((val) => {
      if(val) {
        this.currentUser = val;
      }
      else {
        this.storage.set('currentUser', this.currentUser);
      }
    });
    this.storage.get('events').then((val) => {
      if(val) {
        this.events = val;
      }
      else {
        this.storage.set('events', this.events);
      }
    });
    this.storage.get('attendance').then((val) => {
      if(val) {
        this.attendance = val;
      }
      else {
        this.storage.set('attendance', this.attendance);
      }
    });
    //this.storage.set('members', this.members);
    this.storage.get('members').then((val) => {
      if(val) {
        this.members = val;
      }
      else {
        this.storage.set('members', this.members);
      }
    });

    //TEST
    //this.storage.set('currentUser', this.currentUser);
    //this.storage.set('events', this.events);
    //this.storage.set('attendance', this.attendance);
    //this.storage.set('members', this.members);

    this.storage.get('tos').then((val) => {
      if(val) {
        this.tos = val;
      }
      else {
        this.storage.set('tos', this.tos);
      }
    });
  }

  addEvent(event) {
    this.events.push(event);
    this.storage.set('events', this.events);
  }

  getEvents() {
    return this.events;
  }

  getMembers() {
    return this.members;
  }

  addMember(member) {
    this.members.push(member);
    this.storage.set('members', this.members);
    this.currentGenericAttendance.push({
      name: member.name,
      status: "not present"
    });
    this.storage.set('currentGenericAttendance', this.currentGenericAttendance);
  }

  getAttendance() {
    return this.attendance;
  }

  addAttendee(i, id) {
    this.attendance.push([i, id]);
    this.storage.set('attendance', this.attendance);
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
    this.storage.set('attendance', this.attendance);
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

  getCurrentGenericAttendance() {
    return this.currentGenericAttendance;
  }

  setCurrentGenericAttendance(array) {
    this.currentGenericAttendance = array;
    this.storage.set('currentGenericAttendance', this.currentGenericAttendance);
  }

  getCurrentEventID() {
    return this.currentEventID;
  }

  setCurrentEventID(id) {
    this.currentEventID = id;
  }

  setCurrentUser(tschool, tname, ttype, tid) {
    this.currentUser = {
      school: tschool,
      name: tname,
      type: ttype,
      id: tid
    };
    this.storage.set('currentUser', this.currentUser);
  }

  agreeToTOS() {
    this.tos = true;
    this.storage.set('tos', this.tos);
  }

  getTos() {
    return this.tos;
  }

}
