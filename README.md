# 🍰 BackEnd-SweetSalty

API Backend para o projeto Sweet & Salty - Sistema de gerenciamento de receitas culinárias.

## 📋 Descrição

Este é o backend da aplicação Sweet & Salty, uma API RESTful desenvolvida em Node.js que gerencia receitas culinárias e usuários. A API oferece funcionalidades completas de CRUD (Create, Read, Update, Delete) para receitas e usuários, incluindo sistema de imagens.

## 🔗 Repositórios do Projeto

- **Frontend:** [Sweet_Salty](https://github.com/Amandamecchi/Sweet_Salty.git)
- **Backend:** [BackEnd-SweetSalty](https://github.com/Amandamecchi/BackEnd-SweetSalty.git)



## 📦 Estrutura do Projeto

```
BackEnd-SweetSalty/
├── src/
│   ├── config/
│   │   └── database.js          # Configuração do banco de dados
│   ├── controllers/
│   │   ├── receitasController.js # Controlador de receitas
│   │   └── usuarioController.js  # Controlador de usuários
│   ├── database/
│   │   └── schema.sql           # Schema do banco de dados
│   ├── models/
│   │   ├── receitaModel.js      # Model de receitas
│   │   └── usuarioModel.js      # Model de usuários
│   └── routes/
│       ├── receitasRoutes.js    # Rotas de receitas
│       └── usuarioRoutes.js     # Rotas de usuários
├── uploads/                     # Pasta para imagens das receitas
├── server.js                    # Arquivo principal do servidor
├── package.json                 # Dependências do projeto
└── .env                        # Variáveis de ambiente
```

## 🛠️ Instalação e Configuração

### Pré-requisitos

- Node.js (versão 14 ou superior)
- PostgreSQL
- Git

### 1. Clonar o Repositório

```bash
git clone https://github.com/Amandamecchi/BackEnd-SweetSalty.git
cd BackEnd-SweetSalty
```

### 2. Instalar Dependências

```bash
npm install
```

### 3. Configurar Banco de Dados

1. **Criar banco PostgreSQL:**
   ```sql
   CREATE DATABASE receitas_db;
   ```

2. **Executar o schema:**
   ```bash
   psql -U seu_usuario -d receitas_db -f src/database/schema.sql
   ```

### 4. Configurar Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
# Configurações do Banco de Dados
DB_HOST=localhost
DB_PORT=5432
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=receitas_db

# Configurações do Servidor
PORT=3000
```

### 5. Iniciar o Servidor

**Desenvolvimento:**
```bash
npm run dev
```

**Produção:**
```bash
npm start
```

O servidor estará rodando em `http://localhost:3000`

## 📡 Endpoints da API

### 🍰 Receitas

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/api/receitas` | Lista todas as receitas |
| GET | `/api/receitas/:id` | Busca receita por ID |
| POST | `/api/receitas` | Cria nova receita |
| PUT | `/api/receitas/:id` | Atualiza receita |
| DELETE | `/api/receitas/:id` | Deleta receita |

#### Exemplo de Receita (JSON):
```json
{
  "nome_receita": "Bolo de Chocolate",
  "ingredientes": "3 ovos, 2 xícaras de farinha, 1 xícara de açúcar...",
  "modo_preparo": "Bata todos os ingredientes no liquidificador...",
  "imagem": "bolo-chocolate.jpg",
  "editar_receita": false
}
```

### 👥 Usuários

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/api/usuarios` | Lista todos os usuários |
| GET | `/api/usuarios/:id` | Busca usuário por ID |
| POST | `/api/usuarios` | Cria novo usuário |
| PUT | `/api/usuarios/:id` | Atualiza usuário |
| DELETE | `/api/usuarios/:id` | Deleta usuário |

#### Exemplo de Usuário (JSON):
```json
{
  "nome_usuario": "João Silva",
  "email": "joao.silva@example.com",
  "senha": "senha123"
}
```

### 🖼️ Imagens

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/uploads/:nome_arquivo` | Acessa imagem diretamente |

## 🗄️ Banco de Dados

### Tabela: receitas
```sql
- id (SERIAL PRIMARY KEY)
- nome_receita (VARCHAR(255) NOT NULL)
- ingredientes (TEXT NOT NULL)
- modo_preparo (TEXT NOT NULL)
- imagem (VARCHAR(255))
- data_criacao (TIMESTAMP DEFAULT CURRENT_TIMESTAMP)
- editar_receita (BOOLEAN DEFAULT FALSE)
```

### Tabela: usuarios
```sql
- id (SERIAL PRIMARY KEY)
- nome_usuario (VARCHAR(255) NOT NULL)
- email (VARCHAR(255) UNIQUE NOT NULL)
- senha (VARCHAR(255) NOT NULL)
- data_criacao (TIMESTAMP DEFAULT CURRENT_TIMESTAMP)
```

## 🧪 Testando a API

### Com Postman

1. **Listar Receitas:**
   - GET `http://localhost:3000/api/receitas`

2. **Criar Receita:**
   - POST `http://localhost:3000/api/receitas`
   - Headers: `Content-Type: application/json`
   - Body: JSON da receita

3. **Acessar Imagem:**
   - GET `http://localhost:3000/uploads/bolo-chocolate.jpg`

### Com cURL

```bash
# Listar receitas
curl http://localhost:3000/api/receitas

# Criar nova receita
curl -X POST http://localhost:3000/api/receitas \
  -H "Content-Type: application/json" \
  -d '{"nome_receita":"Torta de Maçã","ingredientes":"maçãs, farinha...","modo_preparo":"Misture tudo..."}'
```

## 🖼️ Sistema de Imagens

1. **Adicionar imagens:** Coloque arquivos de imagem na pasta `uploads/`
2. **Nomear imagens:** Use nomes descritivos (ex: `bolo-chocolate.jpg`)
3. **Referenciar:** No campo `imagem` da receita, use apenas o nome do arquivo
4. **Acessar:** A API retorna `imagem_url` com a URL completa da imagem

## 🔧 Scripts Disponíveis

```bash
npm start          # Inicia o servidor em produção
npm run dev        # Inicia o servidor em desenvolvimento (com nodemon)
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👩‍💻 Autora

**Amanda Mecchi**
- GitHub: [@Amandamecchi](https://github.com/Amandamecchi)

## 🔗 Links Úteis

- [Frontend do Projeto](https://github.com/Amandamecchi/Sweet_Salty.git)
- [Documentação do Express.js](https://expressjs.com/)
- [Documentação do PostgreSQL](https://www.postgresql.org/docs/)

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!
