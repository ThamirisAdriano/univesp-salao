import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  erro: string = '';
  sucesso: string = '';

  constructor(private router: Router) {}

  cadastrar() {
    if (this.username.toLowerCase() === 'admin') {
      this.erro = 'O usuário "admin" é reservado.';
      this.sucesso = '';
      return;
    }
  
    if (this.password !== this.confirmPassword) {
      this.erro = 'As senhas não coincidem.';
      this.sucesso = '';
      return;
    }
  
    localStorage.setItem('usuario', this.username);
    localStorage.setItem('senha', this.password);
  
    this.sucesso = 'Cadastro realizado com sucesso!';
    this.erro = '';
  
    setTimeout(() => this.router.navigate(['/login']), 1500);
  }
}
