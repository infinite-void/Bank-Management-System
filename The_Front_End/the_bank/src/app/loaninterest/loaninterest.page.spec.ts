import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoaninterestPage } from './loaninterest.page';

describe('LoaninterestPage', () => {
  let component: LoaninterestPage;
  let fixture: ComponentFixture<LoaninterestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaninterestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoaninterestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
