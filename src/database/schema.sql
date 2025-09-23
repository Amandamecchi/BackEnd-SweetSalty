CREATE DATABASE receitas_db;
\c receitas_db;

CREATE TABLE receitas (
    id SERIAL PRIMARY KEY,
    nome_receita VARCHAR(255) NOT NULL,
    ingredientes TEXT NOT NULL,
    modo_preparo TEXT NOT NULL,
    imagem VARCHAR(255),
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    editar_receita BOOLEAN DEFAULT FALSE,
    popularidade INTEGER DEFAULT 0
);

INSERT INTO receitas (nome_receita, ingredientes, modo_preparo, imagem, data_criacao, editar_receita, popularidade)
VALUES (
    'Bolo de Chocolate',
    '3 ovos, 2 xícaras de farinha, 1 xícara de açúcar, 1 xícara de leite, 1/2 xícara de óleo, 1 xícara de chocolate em pó, 1 colher de fermento',
    'Bata todos os ingredientes no liquidificador, coloque em uma forma untada e asse em forno médio por 40 minutos.',
    'bolo-chocolate.jpg',
    NOW(),
    FALSE,
    150
);

INSERT INTO receitas (nome_receita, ingredientes, modo_preparo, imagem, data_criacao, editar_receita, popularidade)
VALUES (
    'Lasanha de Carne',
    '500g de carne moída, 1 pacote de massa para lasanha, 300g de queijo, 300g de presunto, molho de tomate, temperos a gosto',
    'Refogue a carne moída, monte camadas alternando massa, carne, queijo e presunto, finalize com molho e asse por 30 minutos.',
    'lasanha-carne.jpg',
    NOW(),
    TRUE,
    200
);

INSERT INTO receitas (nome_receita, ingredientes, modo_preparo, imagem, data_criacao, editar_receita, popularidade)
VALUES (
    'Salada Caesar',
    'Alface americana, peito de frango grelhado, queijo parmesão ralado, croutons, molho Caesar',
    'Misture todos os ingredientes em uma tigela e regue com o molho Caesar antes de servir.',
    'salada-caesar.jpg',
    NOW(),
    FALSE,
    80
);

INSERT INTO receitas (nome_receita, ingredientes, modo_preparo, imagem, data_criacao, editar_receita, popularidade)
VALUES (
    'Brigadeiro',
    '1 lata de leite condensado, 3 colheres de chocolate em pó, 1 colher de manteiga, chocolate granulado para decorar',
    'Misture todos os ingredientes em uma panela e cozinhe em fogo baixo mexendo sempre até engrossar. Espere esfriar, faça bolinhas e passe no granulado.',
    'brigadeiro.jpg',
    NOW(),
    FALSE,
    300
);
    FALSE
);

INSERT INTO receitas (nome_receita, ingredientes, modo_preparo, imagem, data_criacao, editar_receita, popularidade)
VALUES (
    'Spaghetti à Carbonara',
    '400g de spaghetti, 200g de bacon, 3 gemas de ovo, 100g de queijo parmesão ralado, pimenta-do-reino, sal',
    'Cozinhe o spaghetti al dente. Frite o bacon até dourar. Misture gemas com queijo e pimenta. Combine tudo ainda quente mexendo rapidamente.',
    'carbonara.jpg',
    NOW(),
    TRUE,
    180
);

INSERT INTO receitas (nome_receita, ingredientes, modo_preparo, imagem, data_criacao, editar_receita, popularidade)
VALUES (
    'Risotto de Cogumelos',
    '300g de arroz arbóreo, 200g de cogumelos variados, 1 litro de caldo de legumes, 1 cebola, vinho branco, queijo parmesão, manteiga',
    'Refogue a cebola, adicione o arroz até nacarar, acrescente vinho e caldo aos poucos. Adicione cogumelos refogados e finalize com queijo e manteiga.',
    'risotto-cogumelos.jpg',
    NOW(),
    FALSE,
    95
);

INSERT INTO receitas (nome_receita, ingredientes, modo_preparo, imagem, data_criacao, editar_receita, popularidade)
VALUES (
    'Tacos de Frango',
    '500g de peito de frango, tortillas de milho, alface, tomate, cebola roxa, queijo ralado, molho de pimenta, limão',
    'Tempere e grelhe o frango em cubos. Aqueça as tortillas, monte com frango, vegetais e queijo. Sirva com molho e limão.',
    'tacos-frango.jpg',
    NOW(),
    TRUE,
    220
);

INSERT INTO receitas (nome_receita, ingredientes, modo_preparo, imagem, data_criacao, editar_receita, popularidade)
VALUES (
    'Cheesecake de Morango',
    '200g de biscoito triturado, 100g de manteiga, 500g de cream cheese, 3 ovos, 1 xícara de açúcar, morangos para decorar',
    'Misture biscoito com manteiga para a base. Bata cream cheese com açúcar e ovos, despeje sobre a base. Asse em banho-maria por 50 minutos.',
    'cheesecake-morango.jpg',
    NOW(),
    FALSE,
    170
);

INSERT INTO receitas (nome_receita, ingredientes, modo_preparo, imagem, data_criacao, editar_receita, popularidade)
VALUES (
    'Curry de Camarão',
    '500g de camarão limpo, 1 lata de leite de coco, 2 colheres de pasta de curry, 1 cebola, 2 dentes de alho, gengibre, arroz',
    'Refogue cebola, alho e gengibre. Adicione pasta de curry, leite de coco e camarões. Cozinhe por 10 minutos e sirva com arroz.',
    'curry-camarao.jpg',
    NOW(),
    TRUE,
    130
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
        ('Carlos Santos', 'carlos.santos@example.com', 'senha789', NOW()),
        ('Ana Costa', 'ana.costa@example.com', 'senha101', NOW()),
        ('Pedro Almeida', 'pedro.almeida@example.com', 'senha202', NOW()),
        ('Julia Ferreira', 'julia.ferreira@example.com', 'senha303', NOW()),
        ('Lucas Rodrigues', 'lucas.rodrigues@example.com', 'senha404', NOW()),
        ('Fernanda Lima', 'fernanda.lima@example.com', 'senha505', NOW()),
        ('Rafael Barbosa', 'rafael.barbosa@example.com', 'senha606', NOW());


