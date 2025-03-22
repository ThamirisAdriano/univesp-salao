import { TestBed } from '@angular/core/testing';

import { AgendamentoApiService } from './agendamento-api.service';

describe('AgendamentoApiService', () => {
  let service: AgendamentoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgendamentoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
