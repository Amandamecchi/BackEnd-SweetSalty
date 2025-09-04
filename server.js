const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const usuarioRoutes = require('./src/routes/usuarioRoutes');
const receitasRoutes = require('./src/routes/receitasRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/usuarios', usuarioRoutes);
app.use('/api/receitas', receitasRoutes);

app.get('/', (req, res) => {
    res.send('API BackSweetSalty está funcionando!');
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
    console.log(`📡 API disponível em: http://localhost:${PORT}`);
    console.log(`🍰 Receitas: http://localhost:${PORT}/api/receitas`);
    console.log(`👥 Usuários: http://localhost:${PORT}/api/usuarios`);
});
