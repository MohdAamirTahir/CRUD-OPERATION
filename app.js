const express = require('express')
const db = require('./db/connectdb')
const bodyparser = require('body-parser')
const {join} = require('path')
const crud_route=require('./route/crudRoute')
const app = express()
const PORT = 2003

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true }))
app.use('/',crud_route)

// Serve static files from the "public" directory iss ke likhne se humari css or js chalegi

app.use('/',express.static(join(process.cwd(),"public")))
app.use('/edit',express.static(join(process.cwd(),"public")))


app.listen(PORT,()=>console.log(`Your Server Is Running Port No ${PORT}`))