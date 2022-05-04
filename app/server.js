const express = require('express');
const app = express();
const config = require('./config.json');
const {checkConnectionDB} = require("./sequelize");
const apiRoutes = require("./routes/api")

const User = require('./models/user');
const { sequelize } = require('./models/user');

app.use(express.urlencoded({
    extended:true
}))


app.listen(config.server.port, () => {
    console.log(`Express Server Started : http://${config.server.host}:${config.server.port}`)
});

checkConnectionDB();

app.use('/', apiRoutes);