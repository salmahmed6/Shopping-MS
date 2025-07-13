const express = require('express');


const app = express();
app.use(express.jxon());

app.use('/', (req, res, next) => {

    return res.status(200).json({ "msg": "Hello from Shopping" })
})


app.listen(4003, () => {
    console.log("Shopping is Listening to port 4003");
})