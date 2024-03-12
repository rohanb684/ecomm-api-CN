import ProductRepo from "../model/product.repo.js";

export default class ProductController{
    constructor(){
        this.productRepo = new ProductRepo;
    }

    async createProduct(req, res, next){
        const {name, quantity} = req.body;
        try{
            const result = await this.productRepo.createProductRepo({name, quantity});
            if(result){
                res.status(201).json({data:{result}});
            }
        }catch(error){
            console.log(error);
        }
    }

    async getProducts(req, res, next){
        try{
            const result = await this.productRepo.getProductsRepo();
            if(result){
                res.status(200).json({data:{products:result}});
            }
        }catch(error){
            console.log(error);
        }
    }

    async deleteProduct(req, res, next){
        const id = req.params.id 
        try{
            const result = await this.productRepo.deleteProductRepo(id);
            if(result){
                res.status(200).json({data:{message:"product deleted"}});
            }
        }catch(error){
            console.log(error);
        }
    }

    async updateProductQuantity(req, res, next){
        const id = req.params.id 
        const quantity = req.query.number

        try{
            const result = await this.productRepo.updateProductQuantityRepo(id, {quantity});
            if(result){
                res.status(200).json({data:{ product:result,  message:"updated  successfully"}});
            }
        }catch(error){
            console.log(error);
        }
    }
}