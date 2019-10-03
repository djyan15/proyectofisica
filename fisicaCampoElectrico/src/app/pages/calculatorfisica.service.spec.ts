import { TestBed, inject } from '@angular/core/testing';

import { CalculatorfisicaService } from './calculatorfisica.service';

describe('CalculatorfisicaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculatorfisicaService]
    });
  });

  it('should be created', inject([CalculatorfisicaService], (service: CalculatorfisicaService) => {
    expect(service).toBeTruthy();
  }));
});
