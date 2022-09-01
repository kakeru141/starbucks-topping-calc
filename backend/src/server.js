require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT
const mongoose = require('mongoose')
const Products = require('./productSchema')

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, PATCH, DELETE, OPTION"
    )
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization")
    next()
})
app.use(express.json())

mongoose.connect(process.env.DB_URL)
.then(() => console.log('DB connected'))

app.get('/api/get', async (req, res) => {
    try{
        const allProducts = await Products.find({})
        res.status(200).json(allProducts)
    }catch(err){
        console.log(err)
    }
})

app.post('/api/add', async (req, res) => {
    try{
        const createProduct = await Products.create(req.body)        
        res.status(200).json(createProduct)
    }catch(err){
        console.log(err)
    }
})

app.delete('/api/delete', async (req, res) => {
    const id = req.body.id
    Products.findByIdAndRemove(id)
    .then((console.log('remove')))
    .catch((err) => console.log(err))
})

app.patch('/api/update', async (req, res) => {
    

})

app.listen(PORT, console.log(`sever running in ${PORT}`))
