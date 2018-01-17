import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserStoryComponent } from './add-userstory.component';

describe('AddProjectComponent', () => {
  let component: AddUserStoryComponent;
  let fixture: ComponentFixture<AddUserStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
