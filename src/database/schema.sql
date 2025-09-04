CREATE DATABASE receitas_db;
\c receitas_db;

CREATE TABLE receitas (
    id SERIAL PRIMARY KEY,
    nome_receita VARCHAR(255) NOT NULL,
    ingredientes TEXT NOT NULL,
    modo_preparo TEXT NOT NULL,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    editar_receita BOOLEAN DEFAULT FALSE
);

INSERT INTO receitas (nome_receita, ingredientes, modo_preparo, data_criacao, editar_receita)
VALUES (
    'Bolo de Chocolate',
    '3 ovos, 2 xícaras de farinha, 1 xícara de açúcar, 1 xícara de leite, 1/2 xícara de óleo, 1 xícara de chocolate em pó, 1 colher de fermento',
    'Bata todos os ingredientes no liquidificador, coloque em uma forma untada e asse em forno médio por 40 minutos.',
    NOW(),
    FALSE
);

INSERT INTO receitas (nome_receita, ingredientes, modo_preparo, data_criacao, editar_receita)
VALUES (
    'Lasanha de Carne',
    '500g de carne moída, 1 pacote de massa para lasanha, 300g de queijo, 300g de presunto, molho de tomate, temperos a gosto',
    'Refogue a carne moída, monte camadas alternando massa, carne, queijo e presunto, finalize com molho e asse por 30 minutos.',
    NOW(),
    TRUE
);

INSERT INTO receitas (nome_receita, ingredientes, modo_preparo, data_criacao, editar_receita)
VALUES (
    'Salada Caesar',
    'Alface americana, peito de frango grelhado, queijo parmesão ralado, croutons, molho Caesar',
    'Misture todos os ingredientes em uma tigela e regue com o molho Caesar antes de servir.',
    NOW(),
    FALSE
);

CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome_usuario VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO usuarios (nome_usuario, email, senha, data_criacao)
VALUES 
    ('João Silva', 'joao.silva@example.com', 'senha123', NOW()),
    ('Maria Oliveira', 'maria.oliveira@example.com', 'senha456', NOW()),
    ('Carlos Santos', 'carlos.santos@example.com', 'senha789', NOW());


