import { Injectable } from '@angular/core';

export interface Agendamento {
  cliente: string;
  data: string;
  horario: string;
  servico: string;
}

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {
  private chaveLocal = 'agendamentos';

  constructor() {}

  getAgendamentos(): Agendamento[] {
    const dados = localStorage.getItem(this.chaveLocal);
    return dados ? JSON.parse(dados) : [];
  }

  adicionarAgendamento(agendamento: Agendamento): void {
    const agendamentos = this.getAgendamentos();
    agendamentos.push(agendamento);
    localStorage.setItem(this.chaveLocal, JSON.stringify(agendamentos));
  }
}
