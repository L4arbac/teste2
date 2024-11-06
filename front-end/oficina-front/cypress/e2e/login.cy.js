//EXEMPLO TESTE CYPRESS E2E FRONTEND FASE DE PLANEJAMENTO

describe('Teste de Sistema - Página de Login', () => {
    it('Deve realizar login com credenciais válidas e redirecionar para a página de presença', () => {

      cy.visit('http://localhost:3000/login');
  

      cy.get('input[name="email"]').type('usuario@exemplo.com');
      cy.get('input[name="password"]').type('senha123');
  

      cy.get('button[type="submit"]').click();
  

      cy.url().should('include', '/attendance');
  

      cy.contains('Registro de Presença').should('be.visible');
    });
  
    it('Deve mostrar uma mensagem de erro para credenciais inválidas', () => {

      cy.visit('http://localhost:3000/login');
  

      cy.get('input[name="email"]').type('usuario@exemplo.com');
      cy.get('input[name="password"]').type('senha_errada');
  
 
      cy.get('button[type="submit"]').click();
  

      cy.contains('Credenciais inválidas').should('be.visible');
    });
  });
  