const express = require('express');


const app = express();
app.use(express.jxon());

app.use('/', (req, res, next) => {

    return res.status(200).json({ "msg": "Hello from Product" })
})


app.listen(4002, () => {
    console.log("Product is Listening to port 4002");
})