const { v4: uuid4 } = require('uuid');

class Receita {
    constructor(nome_receita, ingredientes, modo_preparo, image_url, data_criacao, editar_receita) {
        this.id = Date.now().toString();
        this.nome_receita = nome_receita;
        this.ingredientes = ingredientes;
        this.modo_preparo = modo_preparo;
        this.image_url = image_url;
        this.data_criacao = data_criacao;
        this.editar_receita = editar_receita;
    }
}

module.exports = Receita;