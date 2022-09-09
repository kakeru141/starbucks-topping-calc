import express from "express";
import { Products } from "./schema";
export const router = express.Router();

router.get("/get", async (req, res) => {
    try{
        // const allProducts = await Products.find({})
        // res.status(200).json(allProducts)
        res.json({message: 'Hello'})
    }catch(err){
        console.log(err)
    }
});

router.post('/add', async (req, res) => {
    try{
        const createProduct = await Products.create(req.body)
        res.status(200).json(createProduct)
    }catch(err){
        console.log(err)
    }
})

router.delete('/delete', async (req, res) => {
    const id = await req.body.id
    Products.findByIdAndRemove(id)
    .catch((err) => console.log(err))
})

