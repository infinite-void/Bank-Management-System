import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewcustomeraccountPage } from './viewcustomeraccount.page';

describe('ViewcustomeraccountPage', () => {
  let component: ViewcustomeraccountPage;
  let fixture: ComponentFixture<ViewcustomeraccountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcustomeraccountPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewcustomeraccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
