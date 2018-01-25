import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryApprovalComponent } from './entry-approval.component';

describe('EntryApprovalComponent', () => {
  let component: EntryApprovalComponent;
  let fixture: ComponentFixture<EntryApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
