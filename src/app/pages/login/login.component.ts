import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  erro: string = '';

  constructor(private router: Router) {}

  login() {
    const usuarioDigitado = this.username;
    const senhaDigitada = this.password;

    // ✅ ADMIN mock fixo
    if (usuarioDigitado === 'admin' && senhaDigitada === '1234') {
      localStorage.setItem('usuario', 'admin');
      this.router.navigate(['/agenda']);
      return;
    }

    // ✅ Verifica usuário comum salvo no localStorage
    const usuarioSalvo = localStorage.getItem('usuario');
    const senhaSalva = localStorage.getItem('senha');

    if (
      usuarioDigitado === usuarioSalvo &&
      senhaDigitada === senhaSalva
    ) {
      this.router.navigate(['/agenda']);
    } else {
      this.erro = 'Usuário ou senha inválidos.';
    }
  }
}
