import ProductModel from "./product.schema.js";

export default class ProductRepo{
    async createProductRepo(data){
        return await new ProductModel(data).save();
    }

    async getProductsRepo(){
        return await ProductModel.find();
    }

    async deleteProductRepo(_id){
        return await ProductModel.findByIdAndDelete(_id);
    }

    async updateProductQuantityRepo(_id, data){
        return await ProductModel.findOneAndUpdate({_id}, data, {
            new:true
        })
    }
}