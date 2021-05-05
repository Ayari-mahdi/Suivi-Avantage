import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaultyDataComponent } from './faulty-data.component';

describe('FaultyDataComponent', () => {
  let component: FaultyDataComponent;
  let fixture: ComponentFixture<FaultyDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaultyDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaultyDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
