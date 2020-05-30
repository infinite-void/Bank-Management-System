import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddbranchPage } from './addbranch.page';

describe('AddbranchPage', () => {
  let component: AddbranchPage;
  let fixture: ComponentFixture<AddbranchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbranchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddbranchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
