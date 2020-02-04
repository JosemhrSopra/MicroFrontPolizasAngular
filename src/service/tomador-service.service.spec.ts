import { TestBed, inject } from '@angular/core/testing';

import { TomadorService } from './tomador-service.service';

describe('TomadorServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TomadorService]
    });
  });

  it('should be created', inject([TomadorService], (service: TomadorService) => {
    expect(service).toBeTruthy();
  }));
});
