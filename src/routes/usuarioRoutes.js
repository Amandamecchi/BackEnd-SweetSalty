const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");

router.get("/", usuarioController.getAllUsuarios);
router.get("/:id", usuarioController.getUsuario); // Corrigido: usuarioController em vez de usuariosController
router.post("/", usuarioController.createUsuario);

module.exports = router;
