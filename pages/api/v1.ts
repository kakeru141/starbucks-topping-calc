import { NextApiRequest, NextApiResponse } from "next";
import { Product } from "../../DB/model";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    if(req.method === 'GET') {
        try{
            const allProducts = await Product.find({})
            res.status(200).json(allProducts)
        }catch (err) {
            console.log(err)
        }
    }else if (req.method === 'POST') {
        try{
            const createProduct = await Product.create(req.body)
            res.status(200).json(createProduct)
        }catch (err) {
            console.log(err)
        }
    }else if (req.method === 'DELETE') {
        try{
            const id = await req.body.id
            Product.findByIdAndRemove(id)
        }catch (err) {
            console.log(err)
        }
    }else if (req.method === 'PUT') {
        //現在未実装
        console.log('PUT')
    }else{
        console.log('メソッドが例外です')
    }
}