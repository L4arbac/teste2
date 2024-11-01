# Oficina de Integração 2 - Sistema de Registro de Presença

## Equipe:
- Gustavo Henrique de Oliveira Camargo - RA: 2350599
- Jacó Cabral de Jesus - RA: 2348004

---

## Descrição do Projeto
Este projeto foi desenvolvido para a disciplina "Oficina de Integração 2", com o objetivo de integrar conteúdos de disciplinas anteriores do curso de Engenharia de Software. O sistema apoia o projeto de extensão ELLP (Ensino Lúdico de Lógica e Programação) no gerenciamento de presença dos alunos nas oficinas de ensino.

## 1. Organização e Tema do Projeto
- **Tema**: Registro de presença em oficinas educativas.
- **Objetivo**: Desenvolver um sistema que registre e gerencie a presença de alunos nas atividades do projeto ELLP, incluindo horários de entrada e saída, além da geração de relatórios de frequência.

## 2. Requisitos Funcionais
- **Cadastro de Usuários**: Armazenar informações essenciais, como nome, email, curso e RA dos alunos.
- **Controle de Presença**: Permitir o registro de presença por meio de check-in manual.
- **Consulta de Histórico de Presenças**: Visualização das presenças registradas, com data, hora de entrada e saída.
- **Relatórios de Frequência**: Gerar relatórios de frequência para alunos, turmas e oficinas, com opção de exportação em CSV.
- **Gerenciamento de Turmas**: Ferramenta para criar, editar e organizar as turmas e 
suas datas.
- **Autenticação e Autorização**: Controle de acesso com perfis diferenciados para administradores, voluntários e alunos.

## 3. Arquitetura do Sistema
O sistema foi planejado seguindo uma arquitetura de três camadas (3-Tier), composta por:

- **Front-End**: Desenvolvido em React, responsável pela interface e experiência do usuário.
- **Back-End**: Implementado em Node.js com Express, gerenciando a lógica de negócios e a comunicação com o banco de dados.
- **Banco de Dados**: MySQL, utilizado para o armazenamento de informações sobre usuários, oficinas e registros de presença.

### Diagrama da Arquitetura:
- Diagramação do sistema pode ser encontrada no diretório `Diagramas`.

## 4. Estratégia de Automação de Testes
- **Testes Unitários**: Componentes de interface e funções de serviço são testados com Jest e Mocha.
- **Testes de Integração**: Avaliação dos endpoints da API e integração com o banco de dados.
- **Integração Contínua (CI)**: Configuração de GitHub Actions para execução automática dos testes a cada commit realizado.

## 5. Tecnologias Utilizadas
- **Front-End**: React com Material UI para a interface de usuário.
- **Back-End**: Node.js com Express.
- **Banco de Dados**: MySQL.
- **Testes**: Jest e Mocha.
- **Integração Contínua**: GitHub Actions para automação dos testes.

---

Este repositório contém as informações e artefatos necessários para a configuração e desenvolvimento do projeto.
