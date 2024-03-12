import express from 'express'
import ProductController from '../controllers/product.controller.js'

const productController = new ProductController();

const productRouter = express.Router();

//Paths
productRouter.post('/create', (req, res, next)=>{
    productController.createProduct(req, res, next);
})

productRouter.get('/', (req, res, next)=>{
    productController.getProducts(req, res, next);
})


productRouter.delete('/:id', (req, res, next)=>{
    productController.deleteProduct(req, res, next);
})

productRouter.post('/:id/update_quantity', (req, res, next)=>{
    productController.updateProductQuantity(req, res, next)
})

export default productRouter;