import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CNSSAgentsRolesComponent } from './cnss-agents-roles.component';

describe('CNSSAgentsRolesComponent', () => {
  let component: CNSSAgentsRolesComponent;
  let fixture: ComponentFixture<CNSSAgentsRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CNSSAgentsRolesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CNSSAgentsRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
