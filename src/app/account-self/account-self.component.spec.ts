import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSelfComponent } from './account-self.component';

describe('AccountSelfComponent', () => {
  let component: AccountSelfComponent;
  let fixture: ComponentFixture<AccountSelfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountSelfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
