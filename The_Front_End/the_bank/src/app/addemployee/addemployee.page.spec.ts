import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddemployeePage } from './addemployee.page';

describe('AddemployeePage', () => {
  let component: AddemployeePage;
  let fixture: ComponentFixture<AddemployeePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddemployeePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddemployeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
