# Salão de Cabeleireiro — Agenda Online

Este projeto é uma aplicação completa para agendamento de serviços em um salão de cabeleireiro, com frontend em Angular e backend em Node.js (API REST).

## Tecnologias Utilizadas

- Angular
- Node.js
- Express
- TypeScript
- UUID
- HTML/CSS
- LocalStorage (login simples)

## Estrutura do Projeto

```
salao-app/
├── backend/              # API REST com Node.js
│   └── server.js
├── src/                  # Código Angular
│   └── app/
│       ├── pages/        # Páginas principais (login, agenda, admin, etc)
│       ├── services/     # Serviço de integração com API
│       └── ...
├── package.json          # Angular
├── backend/package.json  # Backend (se separado)
└── README.md             # Este arquivo
```

## Como Executar o Projeto

### 1. Clonar o Repositório

```
git clone <seu-repo-url>
cd salao-app
```

### 2. Instalar Dependências do Angular

```
npm install
```

### 3. Configurar e Rodar o Backend

```
cd backend
npm install express cors body-parser uuid
node server.js
```

A API estará disponível em `http://localhost:3000`

### 4. Rodar o Frontend Angular

Em outro terminal:

```
cd salao-app
ng serve
```

O aplicativo Angular estará disponível em `http://localhost:4200`

## Usuários Disponíveis

- Admin mockado:
  - Usuário: admin
  - Senha: 1234
  - Acesso ao painel do administrador e gerenciamento de agendamentos

- Usuário comum:
  - Qualquer outro usuário pode ser cadastrado via tela de cadastro

## Proteção de Rotas

- As rotas `agenda`, `admin` e `servicos-agendados` exigem login.
- As rotas `admin` e `servicos-agendados` são protegidas e acessíveis apenas ao usuário admin.

## Funcionalidades

- Login e cadastro com validação
- Agendamento com seleção de data, hora e tipo de serviço
- Bloqueio de datas passadas, domingos e segundas-feiras
- Horários disponíveis com intervalos de 30 minutos, entre 08:00 e 17:30
- Exibição dos serviços agendados com nome, data e horário
- Exclusão individual de agendamentos (disponível apenas para admin)
- Painel do administrador com navegação entre páginas

## Telas do Projeto

- Login
- Cadastro
- Agenda de agendamentos
- Lista de serviços agendados
- Painel administrativo

## Próximos Passos (sugestões)

- Persistência dos agendamentos em arquivo JSON
- Autenticação baseada em JWT
- Integração com um banco de dados
- Interface de calendário visual
- Exportação de agendamentos

## Contribuição

Pull requests são bem-vindos. Para mudanças maiores, por favor abra uma issue para discussão antes da implementação.
