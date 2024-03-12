import express from "express";
import dotenv from 'dotenv';
import { connectDb } from "./src/config/db.js";
import productRouter from "./src/product/routes/product.routes.js";

dotenv.config();

const server = express();
server.use(express.json());


// configure routes
server.use("/products", productRouter)


server.listen(4000, async(err)=>{
    if (err) {
        console.log(`server failed with error ${err}`);
      } else {
        await connectDb()
        console.log(`server is running at http://localhost:4000`);
      }
})