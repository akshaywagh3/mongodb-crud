const express = require('express');
const router = express.Router();
const {
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct,
    insertProduct
} = require("../controllers/product.controller");

router.get("/:id", getProduct);
router.get('/', getProducts);
router.post("/", insertProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;