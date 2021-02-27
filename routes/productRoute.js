const express = require('express')
const router = express.Router()
const productController = require('../controller/productController')

router.post('/product/post', productController.input_items)

module.exports = router