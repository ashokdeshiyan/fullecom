const express = require('express');
const app = express();
const errorMiddleWare = require('./middleware/error')

app.use(express.json())

// route import
const product = require('./routes/productRouter');


app.use("/api",product)
app.use(errorMiddleWare)

module.exports = app;


