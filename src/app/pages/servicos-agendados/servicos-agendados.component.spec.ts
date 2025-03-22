import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosAgendadosComponent } from './servicos-agendados.component';

describe('ServicosAgendadosComponent', () => {
  let component: ServicosAgendadosComponent;
  let fixture: ComponentFixture<ServicosAgendadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicosAgendadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicosAgendadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
