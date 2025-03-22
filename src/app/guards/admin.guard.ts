import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const usuario = localStorage.getItem('usuario');

    if (usuario === 'admin') {
      return true;
    }

    alert('Acesso restrito: apenas administradores');
    this.router.navigate(['/agenda']);
    return false;
  }
}
