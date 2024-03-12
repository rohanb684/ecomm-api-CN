Ecommerce Api 

This project is an implementation of an API for an ecommerce platform admin to manage product inventory. It is built using Node.js and MongoDB. The API provides endpoints for adding products, listing products, deleting products, and updating the quantity of a product.

Tech Stack
- Node.js
- MongoDB

Setup Instructions:
1) Clone the repository to your local machine:
    git clone <repository-url>

2)Navigate to the project directory:
    cd <project-directory>

3)Install dependencies.
    npm install

4)Create a MongoDB database and update the connection string in the config.js file "src/config/db.js":
     const res = await mongoose.connect("your-mongodb-connection-string", {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });

5)Start the Server.
    node index.js


API Endpoints

1. Add Product
    - URL: /products/create
    - Method: POST
    - Request Body:
        {
  "product": {
    "name": "laptop",
    "quantity": 10
  }
}
    
    - Response:
        {
  "data": {
    "product": {
      "name": "laptop",
      "quantity": 10
    }
  }
}


2. List Products
    - URL: /products
    - Method: GET
    - Response:
        {
  "data": {
    "products": [
      {
        "id": 1,
        "name": "laptop",
        "quantity": 10
      },
      {
        "id": 2,
        "name": "camera",
        "quantity": 5
      }
    ]
  }
}

3. Delete Product
    - URL: /products/:id
    - Method: DELETE
    - Response:
        {
  "data": {
    "message": "product deleted"
  }
}

4. Update Quantity
    - URL: /products/:id/update_quantity/?number=10
    - Method: POST
    - Response:
        {
  "data": {
    "product": {
      "id": 1,
      "name": "laptop",
      "quantity": 20
    },
    "message": "updated successfully"
  }
}


