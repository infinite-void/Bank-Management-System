import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DepositinterestPage } from './depositinterest.page';

describe('DepositinterestPage', () => {
  let component: DepositinterestPage;
  let fixture: ComponentFixture<DepositinterestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositinterestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DepositinterestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
