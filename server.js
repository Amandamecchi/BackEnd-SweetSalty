const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const usuarioRoutes = require('./src/routes/usuarioRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/usuarios', usuarioRoutes);

app.get('/', (req, res) => {
    res.send('API BackSweetSalty está funcionando!');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
