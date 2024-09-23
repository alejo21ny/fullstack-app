# API Documentation

## Overview

This API allows for managing products in an online store, providing functionalities to retrieve, create, update, and delete products. All endpoints respond in JSON format and require a `Content-Type: application/json` header.

## Endpoints

### `GET /api/products`
- **Description**: Retrieves all available products from the database.
- **Successful Response**:
  ```json
  [
    {
      "_id": "12345",
      "name": "Product 1",
      "description": "Description of product 1",
      "price": 100,
      "image": "http://example.com/image1.jpg"
    },
    {
      "_id": "12346",
      "name": "Product 2",
      "description": "Description of product 2",
      "price": 200,
      "image": "http://example.com/image2.jpg"
    }
  ]

Response Code: 200 OK
POST /api/products
Description: Creates a new product in the database.
Request Body:
{
  "name": "New Product",
  "description": "Description of the new product",
  "price": 50,
  "image": "http://example.com/image3.jpg"
}

Successful Response:
{
  "_id": "12347",
  "name": "New Product",
  "description": "Description of the new product",
  "price": 50,
  "image": "http://example.com/image3.jpg"
}

Response Code: 201 Created
Common Errors:
400 Bad Request: If any required fields like name or price are missing.
PATCH /api/products/:id
Description: Updates the details of an existing product.
Path Parameters:
:id - ID of the product to update.
Request Body (only the fields you want to update):
{
  "name": "Updated Product",
  "price": 150
}

Successful Response:
{
  "_id": "12345",
  "name": "Updated Product",
  "description": "Description of product 1",
  "price": 150,
  "image": "http://example.com/image1.jpg"
}

Response Code: 200 OK
Common Errors:
404 Not Found: If the product with the provided ID does not exist.
DELETE /api/products/:id
Description: Deletes a product from the database.
Path Parameters:
:id - ID of the product to delete.
Successful Response:
{
  "message": "Product successfully deleted"
}

Response Code: 200 OK
Common Errors:
404 Not Found: If the product with the provided ID does not exist.

Usage Examples

Get All Products
bash
curl -X GET http://localhost:5000/api/products

Create a New Product
bash
curl -X POST http://localhost:5000/api/products \
-H "Content-Type: application/json" \
-d '{
  "name": "New Product",
  "description": "Description of the new product",
  "price": 50,
  "image": "http://example.com/image3.jpg"
}'

Update a Product
bash
curl -X PATCH http://localhost:5000/api/products/12345 \
-H "Content-Type: application/json" \
-d '{
  "name": "Updated Product",
  "price": 150
}'

Delete a Product
bash
curl -X DELETE http://localhost:5000/api/products/12345