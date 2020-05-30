import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoansanctionPage } from './loansanction.page';

describe('LoansanctionPage', () => {
  let component: LoansanctionPage;
  let fixture: ComponentFixture<LoansanctionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoansanctionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoansanctionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
