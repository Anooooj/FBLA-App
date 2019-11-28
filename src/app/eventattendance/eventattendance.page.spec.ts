import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventattendancePage } from './eventattendance.page';

describe('EventattendancePage', () => {
  let component: EventattendancePage;
  let fixture: ComponentFixture<EventattendancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventattendancePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EventattendancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
