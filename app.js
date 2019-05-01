const bodyParser = require('body-parser');
const routes = require('./src/routes/index');
const db = require('./src/db/mongo.connect');
const express = require('express');

db();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

routes(app);

app.listen(4000, () => {
    console.log("Server");
});