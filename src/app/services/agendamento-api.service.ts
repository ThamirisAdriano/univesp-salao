import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Agendamento {
  id?: string;
  cliente: string;
  data: string;
  horario: string;
  servico: string;
}

@Injectable({
  providedIn: 'root'
})
export class AgendamentoApiService {
  private apiUrl = 'https://univesp-salao.onrender.com/agendamentos';

  constructor(private http: HttpClient) {}

  listar(): Observable<Agendamento[]> {
    return this.http.get<Agendamento[]>(this.apiUrl);
  }

  criar(agendamento: Agendamento): Observable<any> {
    return this.http.post(this.apiUrl, agendamento);
  }

  limpar(): Observable<any> {
    return this.http.delete(this.apiUrl);
  }

  deletar(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  
}
