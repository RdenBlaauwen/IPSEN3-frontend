import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserStoryComponent } from './edit-userstory.component';

describe('EditProjectComponent', () => {
  let component: EditUserStoryComponent;
  let fixture: ComponentFixture<EditProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
