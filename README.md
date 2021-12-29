# CRUD-LOJA
CRUD PARA LOJA DE VEÍCULOS

Rotas: 
Autenticação: 
1-)POST /auth -> Rota de Login
2-)GET /secret -> Rota de Teste de Autenticação

Usuarios:
1-) POST /users -> Criação de novo usuário.
2-) GET /users -> Rertorno de todos os usuarios no BD.
3-) GET /users/userId -> Retorno de um usuário específico.
4-) UPDATE /users/userId -> Atualização de dados de um usuário.
5-) DELETE /users/userId -> Exclui um usuário do banco de dados.

Veiculos:
1-) POST /veiculos -> Criação de novo veículo.
2-) GET /veiculos -> Retorno de todos os veículos no BD.
3-) GET /veiculos/veicId -> Retorno de um veículo específico.
4-) UPDATE /veiculos/veicId -> Atualização de dados de um veículo específico.
5-) DELETE /veiculos/veicId -> Exclui um veículo do banco de dados.

Vendas:
1-) GET /vendas/reservado -> Retorno de todos os veículos reservados no banco de dados.
2-) GET /vendas/vendido -> Retorno de todos os veículos vendidos no banco de dados.
3-) GET /vendedor/id -> Retorno de todas as operações de um determinado vendedor.

Observações:
1-) Utilizar POSTMAN para teste das requisições. Segue ID do workspace: 58c27a49-ef7f-4d9f-b3df-7bbd9ea054c4.
2-) Branch Teste_Lógico contem os arquivos referentes ao teste lógico do processo seletivo.
