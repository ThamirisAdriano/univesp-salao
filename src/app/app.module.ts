import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { AgendaComponent } from './pages/agenda/agenda.component';
import { FormsModule } from '@angular/forms';
import { ServicosAgendadosComponent } from './pages/servicos-agendados/servicos-agendados.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { LogoutButtonComponent } from './shared/logout-button/logout-button.component';
import { HttpClientModule } from '@angular/common/http';
import { SaudacaoComponent } from './saudacao/saudacao.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AgendaComponent,
    ServicosAgendadosComponent,
    CadastroComponent,
    AdminPanelComponent,
    LogoutButtonComponent,
    SaudacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
