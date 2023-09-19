const mongoose = require('mongoose')
const express = require('express')
const controller = require('../controller/crudController')
const crud_route = express()

crud_route.set('view engine','ejs')
crud_route.set('views','./views')

crud_route.get('/',controller.getAllDocs)
crud_route.post('/submit',controller.createDocs)
crud_route.get('/edit/:id',controller.editDocs)
crud_route.post('/update/:id',controller.updateDocs)
crud_route.post('/delete/:id',controller.deleteDocs)

module.exports=crud_route