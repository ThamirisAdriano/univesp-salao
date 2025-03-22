import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { AgendaComponent } from './pages/agenda/agenda.component';
import { ServicosAgendadosComponent } from './pages/servicos-agendados/servicos-agendados.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'agenda', component: AgendaComponent, canActivate: [AuthGuard] },
  { path: 'servicos-agendados', component: ServicosAgendadosComponent, canActivate: [AdminGuard]},
  { path: 'admin', component: AdminPanelComponent, canActivate: [AdminGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
