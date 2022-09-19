import { error } from 'console';
import mongoose from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';
import { Product } from '../../src/libs/DB/model';

mongoose
  .connect(process.env.DB_URL || '')
  .then(() => console.log('DB connected'))
  .catch((err) => console.error(`DB connect error: ${err}`));

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const allProducts = await Product.find({});
      res.status(200).json(allProducts);
    } catch (err) {
      console.error(err);
    }
  } else if (req.method === 'POST') {
    try {
      const createProduct = await Product.create(req.body);
      res.status(200).json(createProduct);
    } catch (err) {
      console.error(err);
    }
  } else if (req.method === 'DELETE') {
    try {
      const id = await req.body.id;
      await Product.findByIdAndRemove(id);
      res.end();
    } catch (err) {
      console.error(err);
    }
  } else if (req.method === 'PUT') {
    try {
      const id = await req.body.id;
      const data = await req.body.data;
      await Product.findByIdAndUpdate(id, data);
      res.end();
    } catch (err) {
      console.error(error);
    }
  } else {
    console.log('メソッドが例外です');
  }
}
