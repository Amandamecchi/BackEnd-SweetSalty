const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const usuarioRoutes = require('./src/routes/usuarioRoutes');
const receitasRoutes = require('./src/routes/receitasRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/usuarios', usuarioRoutes);
app.use('/api/receitas', receitasRoutes);

app.get('/', (req, res) => {
    res.send('API BackSweetSalty está funcionando!');
});

app.listen(PORT, () => {
    console.log(`📡 API disponível em: http://localhost:${PORT}`);
});
