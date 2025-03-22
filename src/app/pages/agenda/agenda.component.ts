import { Component, OnInit } from '@angular/core';
import {
  AgendamentoApiService,
  Agendamento,
} from 'src/app/services/agendamento-api.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css'],
})
export class AgendaComponent implements OnInit {
  nomeCliente = '';
  data = '';
  horario = '';
  servicoSelecionado = '';
  agendamentos: Agendamento[] = [];

  servicos: string[] = [
    'Corte feminino',
    'Escova lisa',
    'Escova modelada',
    'Hidratação capilar',
    'Progressiva',
    'Coloração',
    'Luzes',
    'Mechas',
    'Botox capilar',
    'Selagem térmica',
    'Penteado',
    'Babyliss',
    'Matização',
    'Tonificação',
    'Reconstrução capilar',
    'Cauterização',
    'Alisamento definitivo',
    'Relaxamento capilar',
    'Blindagem capilar',
    'Desintoxicação capilar',
  ];

  constructor(private agendamentoApi: AgendamentoApiService) {}

  dataMinima = '';

  ngOnInit(): void {
    this.carregarAgendamentos();

    const hoje = new Date();
    this.dataMinima = hoje.toISOString().split('T')[0]; // yyyy-mm-dd
  }

  carregarAgendamentos() {
    this.agendamentoApi.listar().subscribe((dados) => {
      this.agendamentos = dados;
      this.atualizarHorariosDisponiveis();
    });
  }
  

  agendar() {
    if (
      !this.nomeCliente ||
      !this.data ||
      !this.horario ||
      !this.servicoSelecionado
    ) {
      alert('Preencha todos os campos.');
      return;
    }

    const [ano, mes, dia] = this.data.split('-').map(Number);
    const dataSelecionada = new Date(ano, mes - 1, dia);
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    // Não permitir datas passadas
    if (dataSelecionada < hoje) {
      alert('Não é possível agendar em datas passadas.');
      return;
    }

    const diaSemana = dataSelecionada.getDay();

    if (diaSemana === 0 || diaSemana === 1) {
      alert('Agendamentos não são permitidos aos domingos e segundas-feiras.');
      return;
    }

    const novo: Agendamento = {
      cliente: this.nomeCliente,
      data: this.data,
      horario: this.horario,
      servico: this.servicoSelecionado,
    };

    this.agendamentoApi.criar(novo).subscribe(() => {
      this.nomeCliente = '';
      this.data = '';
      this.horario = '';
      this.servicoSelecionado = '';
      this.carregarAgendamentos();
    });
  }

  usuarioEhAdmin(): boolean {
    return localStorage.getItem('usuario') === 'admin';
  }
  horariosDisponiveis: string[] = [];

  atualizarHorariosDisponiveis() {
    if (!this.data) {
      this.horariosDisponiveis = [];
      return;
    }

    const horarios: string[] = [];
    for (let hora = 8; hora < 18; hora++) {
      horarios.push(`${hora.toString().padStart(2, '0')}:00`);
      horarios.push(`${hora.toString().padStart(2, '0')}:30`);
    }

    const horariosOcupados = this.agendamentos
      .filter((a) => a.data === this.data)
      .map((a) => a.horario);

    this.horariosDisponiveis = horarios.filter(
      (h) => !horariosOcupados.includes(h)
    );
  }
}
