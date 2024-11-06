//EXEMPLO DE TESTE BACKEND PARA FASE DE PLANEJAMENTO DO PROJETO

const request = require('supertest');
const app = require('../app');

describe('Testes de Integração - Rota de Autenticação', () => {
 
  it('Deve retornar um token JWT ao fazer login com sucesso', async () => {
    const response = await request(app)
      .post('/auth/login')
      .send({
        email: 'usuario@exemplo.com',
        password: 'senha123'
      });
      
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
  });


  it('Deve retornar um erro 401 para credenciais incorretas', async () => {
    const response = await request(app)
      .post('/auth/login')
      .send({
        email: 'usuario@exemplo.com',
        password: 'senha_errada'
      });
      
    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty('error', 'Credenciais inválidas');
  });
});
