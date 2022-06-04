const express = require('express');
const dotenv = require('dotenv');
const res = require('express/lib/response');
dotenv.config({ path: './config.env' });
const app = express();

app.get('hallo', async() => {
    try {
        res.send({
            massage: 'hallo from backend server',
        });
    } catch (err) {
        console.log(err);
        res.send({ err });
    }
});

port = process.env.PORT || 8000;
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
});