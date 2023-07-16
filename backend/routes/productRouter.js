const express = require('express');
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails } = require('../controllers/productController');


const router = express.Router();
router.route("/products").get(getAllProducts)// this just another way to write routes

router.post("/product/new", createProduct)
router.put("/product/:id", updateProduct)
router.get("/product/:id", getProductDetails)
router.delete("/product/:id", deleteProduct)


module.exports = router;