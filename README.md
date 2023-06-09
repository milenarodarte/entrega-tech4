## API CONTATOS e CLIENTES

#### API criada com o proposito de cadastrar clientes e contatos dos clientes em um banco de dados.

## .ENV

#### para rodar a API em sua máquina é necessário criar um arquivo .env e colocar as informações necessárias de acordo com o modelo disponível em .env.exemple

## Rodar aplicação

#### ➡️ yarn install

#### ➡️ yarn run dev

### Cadastrar clientes:

#### ➡️ http://localhost:3000/clients

### listar clientes:

#### ➡️ http://localhost:3000/clients

### modificar clientes:

#### ➡️ http://localhost:3000/clients/:id

### deletar clientes:

#### ➡️ http://localhost:3000/clients/:id

### cadastrar contatos:

#### ➡️ http://localhost:3000/contacts

### listar contatos:

#### ➡️ http://localhost:3000/contacts

### modificar contatos:

#### ➡️ http://localhost:3000/contacts/:id

### deletar contatos:

#### ➡️ http://localhost:3000/contacts/:id

### CADASTRO DE CLIENTES:
##### { fullName: , phone: , email: }
### CADASTRO CONTATOS: 
##### { fullName: string , phone: string, email: string , clientAttached: number id do client }
### DELETAR E MODIFICAR: id da URL é o referente ao do contato/cliente que deseja moficar/deletar 
