# carstore-api

## CRUD PARA LOJA DE VEÍCULOS

Rotas:
Autenticação:
* POST /auth -> Rota de Login
* GET /secret -> Rota de Teste de Autenticação

Usuários:
* POST /users -> Criação de novo usuário.
* GET /users -> Retorno de todos os usuários no BD.
* GET /users/userId -> Retorno de um usuário específico.
* UPDATE /users/userId -> Atualização de dados de um usuário.
* DELETE /users/userId -> Exclui um usuário do banco de dados.

Veiculos:
* POST /veiculos -> Criação de novo veículo.
* GET /veiculos -> Retorno de todos os veículos no BD.
* GET /veiculos/veicId -> Retorno de um veículo específico.
* UPDATE /veiculos/veicId -> Atualização de dados de um veículo específico.
* DELETE /veiculos/veicId -> Exclui um veículo do banco de dados.

Vendas:
* GET /vendas/reservado -> Retorno de todos os veículos reservados no banco de dados.
* GET /vendas/vendido -> Retorno de todos os veículos vendidos no banco de dados.
* GET /vendedor/id -> Retorno de todas as operações de um determinado vendedor.


