import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router
} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const usuario = localStorage.getItem('usuario');
    const senha = localStorage.getItem('senha');

    if (usuario && senha) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
