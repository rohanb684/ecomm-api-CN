import mongoose from "mongoose";

const productSchmea = new mongoose.Schema({
    name:String,
    quantity:Number
})

const ProductModel = mongoose.model('Product', productSchmea);
export default ProductModel;