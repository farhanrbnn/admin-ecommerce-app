const express = require('express')
const router = express.Router()
const productController = require('../controller/productController')

router.post('/product/post', productController.input_items)
router.get('/product/list', productController.get_all_product)
router.delete('/product/delete/:id', productController.delete_product)

module.exports = router