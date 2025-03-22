import { Component, OnInit } from '@angular/core';
import { AgendamentoApiService, Agendamento } from 'src/app/services/agendamento-api.service';

@Component({
  selector: 'app-servicos-agendados',
  templateUrl: './servicos-agendados.component.html',
  styleUrls: ['./servicos-agendados.component.css']
})
export class ServicosAgendadosComponent implements OnInit {
  agendamentos: Agendamento[] = [];

  constructor(private agendamentoApi: AgendamentoApiService) {}

  ngOnInit(): void {
    this.carregarAgendamentos();
  }

  carregarAgendamentos() {
    this.agendamentoApi.listar().subscribe((dados) => {
      this.agendamentos = dados;
    });
  }

  deletar(id: string) {
    if (confirm('Tem certeza que deseja excluir este agendamento?')) {
      this.agendamentoApi.deletar(id).subscribe(() => {
        this.carregarAgendamentos();
      });
    }
  }

  usuarioEhAdmin(): boolean {
    return localStorage.getItem('usuario') === 'admin';
  }

  formatarData(dataISO: string): string {
    const [ano, mes, dia] = dataISO.split('-').map(Number);
    const data = new Date(ano, mes - 1, dia);
  
    const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const diaSemana = diasSemana[data.getDay()];
  
    const diaFormatado = dia.toString().padStart(2, '0');
    const mesFormatado = (mes).toString().padStart(2, '0');
  
    return `${diaSemana} - ${diaFormatado}/${mesFormatado}/${ano}`;
  }
  
}
