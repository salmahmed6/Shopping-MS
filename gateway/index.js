const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy')

const app = express();

app.use(cors());
app.use(express.json());

app.use('/cutomer', proxy('http://localhost:4001'))
app.use('/shopping', proxy('http://localhost:4003'))
app.use('/', proxy('http://localhost:4002')) //products

app.listen(4000, () => {
    console.log("Gateway is Listening to port 4000");
})