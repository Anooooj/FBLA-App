import { CalendarComponent } from 'ionic2-calendar/calendar';
import { Component, ViewChild, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { NavController } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'calendar.page.html',
  styleUrls: ['calendar.page.scss'],
})

export class CalendarPage implements OnInit {

  event = {
    title: '',
    desc: '',
    startTime: '',
    endTime: '',
    allDay: false
  };

  minDate = new Date().toISOString();

  eventSource = this.dataService.getEvents();

  viewTitle;

  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };

  error = '';

  @ViewChild(CalendarComponent, {static: false}) myCal: CalendarComponent;

  constructor(private alertCtrl: AlertController, @Inject(LOCALE_ID) private locale: string, public navCtrl: NavController, private dataService: DataService, public storage: Storage) {

  }

  ngOnInit() {
    this.storage.get('events').then((val) => {
      if (val) {
        this.eventSource = val;
      }
      else {
        this.eventSource = this.dataService.getEvents();
      }
    });
    this.resetEvent();
  }

  refresh() {
    this.myCal.loadEvents();
  }

  ionViewDidLoad() {
    this.myCal.loadEvents();
  }

  ionViewDidEnter(){
    this.myCal.loadEvents();
  }

  ionViewWillEnter() {
    this.myCal.loadEvents();
  }

  resetEvent() {
    this.event = {
      title: '',
      desc: '',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
      allDay: false
    };
  }

  // Create the right event format and reload source
  addEvent() {
    let eventCopy = {
      title: this.event.title,
      startTime:  new Date(this.event.startTime),
      endTime: new Date(this.event.endTime),
      allDay: this.event.allDay,
      desc: this.event.desc
    }

    if (eventCopy.allDay) {
      let start = eventCopy.startTime;
      let end = eventCopy.endTime;

      eventCopy.startTime = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
      eventCopy.endTime = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate() + 1));
    }

    var nameTaken = false;
    this.dataService.getEvents().forEach(element => {
      if (element.title == eventCopy.title) {
        nameTaken = true;
      }
    });

    if (nameTaken == false) {
      this.dataService.addEvent(eventCopy);
      this.eventSource = this.dataService.getEvents();
      this.myCal.loadEvents();
      this.resetEvent();
      this.error = '';
    }
    else {
      this.error = 'The event name has already been taken.'
    }
  }
  // Change current month/week/day
  next() {
   var swiper = document.querySelector('.swiper-container')['swiper'];
   swiper.slideNext();
  }

  back() {
   var swiper = document.querySelector('.swiper-container')['swiper'];
   swiper.slidePrev();
  }

  // Change between month/week/day
  changeMode(mode) {
   this.calendar.mode = mode;
  }

  // Focus today
  today() {
   this.calendar.currentDate = new Date();
  }

  // Selected date reange and hence title changed
  onViewTitleChanged(title) {
   this.viewTitle = title;
  }

  // Calendar event was clicked
  async onEventSelected(event) {
   // Use Angular date pipe for conversion
   let start = formatDate(event.startTime, 'medium', this.locale);
   let end = formatDate(event.endTime, 'medium', this.locale);

   var index = -1;
   for (let i = 0; i < this.dataService.getEvents().length; i++) {
     if (this.dataService.getEvents()[i].title == event.title) {
       index = i;
     }
   }
   var signedup = false;
   this.dataService.getAttendance().forEach(element => {
     if (element[0] == index) {
       if (element[1] == this.dataService.getCurrentUser().id) {
         signedup = true;
       }
     }
   });

   if (signedup == false) {
     if (this.dataService.getCurrentUser().type == "administrator") {
       const alert = await this.alertCtrl.create({
         header: event.title,
         subHeader: event.desc,
         message: 'From: ' + start + '<br><br>To: ' + end,
         buttons: [
           {
             text: 'Sign Up',
             handler: () => {
               this.dataService.addAttendee(index, this.dataService.getCurrentUser().id);
               //this.navCtrl.navigateForward('eventsignup');
             }
           },
           {
             text: 'Attendance',
             handler: () => {
               this.dataService.setCurrentEventID(index);
               this.navCtrl.navigateForward('eventattendance');
             }
           },
           'Close'
         ]
       });
       alert.present();
     }
     else {
       const alert = await this.alertCtrl.create({
         header: event.title,
         subHeader: event.desc,
         message: 'From: ' + start + '<br><br>To: ' + end,
         buttons: [
           {
             text: 'Sign Up',
             handler: () => {
               this.dataService.addAttendee(index, this.dataService.getCurrentUser().id);
               //this.navCtrl.navigateForward('eventsignup');
             }
           },
           'Close'
         ]
       });
       alert.present();
     }
   }
   else {
     if (this.dataService.getCurrentUser().type == "administrator") {
       const alert = await this.alertCtrl.create({
         header: event.title,
         subHeader: event.desc,
         message: 'From: ' + start + '<br><br>To: ' + end,
         buttons: [
           {
             text: 'Sign Out',
             handler: () => {
               //this.navCtrl.navigateForward('eventsignup');
               this.dataService.removeAttendee(index, this.dataService.getCurrentUser().id);
             }
           },
           {
             text: 'Attendance',
             handler: () => {
               this.dataService.setCurrentEventID(index);
               this.navCtrl.navigateForward('eventattendance');
             }
           },
           'Close'
         ]
       });
       alert.present();
     }
     else {
       const alert = await this.alertCtrl.create({
         header: event.title,
         subHeader: event.desc,
         message: 'From: ' + start + '<br><br>To: ' + end,
         buttons: [
           {
             text: 'Sign Out',
             handler: () => {
               //this.navCtrl.navigateForward('eventsignup');
               this.dataService.removeAttendee(index, this.dataService.getCurrentUser().id);
             }
           },
           'Close'
         ]
       });
       alert.present();
     }
   }
  }

  // Time slot was clicked
  onTimeSelected(ev) {
   let selected = new Date(ev.selectedTime);
   this.event.startTime = selected.toISOString();
   selected.setHours(selected.getHours() + 1);
   this.event.endTime = (selected.toISOString());
  }
}
