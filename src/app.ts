import express from 'express';

const { version } = require("../.appversion.json");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`Hello World (v${version})!`)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})