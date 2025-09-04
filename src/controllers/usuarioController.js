const usuarioModel = require("../models/usuarioModel");

const getAllUsuarios = async (req, res) => {
    try {
        const usuarios = await usuariosModel.getUsuarios();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar bruxos." });
    }
};

const getUsuario = async (req, res) => {
    try {
        const usuario = await usuarioModel.getusuarioById(req.params.id);
        if (!usuario) {
            return res.status(404).json({ message: "Usuário não encontrado." });
        }
        res.json(usuario);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar bruxo." });
    }
};

const createUsuario = async (req, res) => {
    try {
        const { name, house_id } = req.body;
        const newUsuario = await wizardModel.createWizard(name, house_id);
        res.status(201).json(newWizard);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar bruxo." });
    }
};

module.exports = { getAllWizards, getWizard, createWizard };
