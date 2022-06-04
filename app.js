const express = require('express');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = express();

const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerJsDoc = YAML.load('./api.yml');

app.get('/hallo/', (req, res) => {
    res.send('hallo from backend server');
});

port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
});

app.use('/', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc));