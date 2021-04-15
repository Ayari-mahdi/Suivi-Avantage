import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAdvantagesComponent } from './new-advantages.component';

describe('NewAdvantagesComponent', () => {
  let component: NewAdvantagesComponent;
  let fixture: ComponentFixture<NewAdvantagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAdvantagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAdvantagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
