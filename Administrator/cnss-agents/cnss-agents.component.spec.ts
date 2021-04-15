import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CNSSAgentsComponent } from './cnss-agents.component';

describe('CNSSAgentsComponent', () => {
  let component: CNSSAgentsComponent;
  let fixture: ComponentFixture<CNSSAgentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CNSSAgentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CNSSAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
