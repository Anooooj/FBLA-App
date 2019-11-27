import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventsignupPage } from './eventsignup.page';

describe('EventsignupPage', () => {
  let component: EventsignupPage;
  let fixture: ComponentFixture<EventsignupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsignupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EventsignupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
