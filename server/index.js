require('dotenv').config();

const express = require('express');
const massive = require('massive');
const controller = require('./controller');
const app = express();

app.use(express.json())

const {SERVER_PORT, CONNECTION_STRING} = process.env

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('db connected')
})

//ENDPOINTS
app.get('/api/house', controller.getHouses)


app.listen(SERVER_PORT, () => console.log(`server running on ${SERVER_PORT}`))