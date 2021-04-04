import { TestBed } from '@angular/core/testing';

import { KaramaService } from './karama.service';

describe('KaramaService', () => {
  let service: KaramaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KaramaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
