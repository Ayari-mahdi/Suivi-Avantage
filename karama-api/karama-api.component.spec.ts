import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaramaApiComponent } from './karama-api.component';

describe('KaramaApiComponent', () => {
  let component: KaramaApiComponent;
  let fixture: ComponentFixture<KaramaApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KaramaApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KaramaApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
