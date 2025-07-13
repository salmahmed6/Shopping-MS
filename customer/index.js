const express = require('express');


const app = express();
app.use(express.jxon());

app.use('/', (req, res, next) => {

    return res.status(200).json({ "msg": "Hello from Customer" })
})


app.listen(4001, () => {
    console.log("Customer is Listening to port 4001");
})