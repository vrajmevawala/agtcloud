import { Request, Response } from "express";
import { products } from "../data/products";

export const productController = {
  getAllProducts: (req: Request, res: Response) => {
    res.json(products);
  },
  
  getProductBySlug: (req: Request, res: Response) => {
    const { slug } = req.params;
    const product = products.find(p => p.slug === slug);
    
    if (!product) {
      return res.status(404).json({ message: `Product with slug '${slug}' not found` });
    }
    
    res.json(product);
  }
};
