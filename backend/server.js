const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

const { v4: uuidv4 } = require('uuid'); 


app.use(cors());
app.use(bodyParser.json());

// Mock: Lista de agendamentos em memória
let agendamentos = [];

// Rotas
app.get('/agendamentos', (req, res) => {
  res.json(agendamentos);
});

app.post('/agendamentos', (req, res) => {
    const novo = { ...req.body, id: uuidv4() };
    agendamentos.push(novo);
    res.status(201).json(novo); 
  });
  
  

  app.delete('/agendamentos/:id', (req, res) => {
    const { id } = req.params;
    agendamentos = agendamentos.filter(item => item.id !== id);
    res.json({ mensagem: 'Agendamento removido.' });
  });
  

app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});
