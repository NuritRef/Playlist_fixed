require("dotenv").config()
const express = require('express'),
    app = express(),
    PORT = process.env.PORT || 3001

app.use(require("cors")())
app.use(express.json())

app.listen(PORT,()=>console.log("connection success"))

app.use('/search',require('./Routes/searchRouter'))

// require('./DL/db').myConnect()

