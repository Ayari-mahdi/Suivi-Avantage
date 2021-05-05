import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotYetRegisteredComponent } from './not-yet-registered.component';

describe('NotYetRegisteredComponent', () => {
  let component: NotYetRegisteredComponent;
  let fixture: ComponentFixture<NotYetRegisteredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotYetRegisteredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotYetRegisteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
