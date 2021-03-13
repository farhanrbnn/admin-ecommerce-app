const Post = require('../model/products')
const statusController = require('../controller/statusController')

const input_items = async(req,res) => {
	let post = new Post({
		name: req.body.name,
		category: req.body.category,
		quantity: req.body.quantity,
		price: req.body.price,
		picture: req.body.picture
	})

	try {
		let savedPost = await post.save()
		return statusController.success200(res, savedPost)
	} catch (err) {
		return statusController.badRequest400(res, err)
	}
}

const get_all_product = async (req, res) => {
	try {
		let getData = await Post.find()

		if (getData) {
			return statusController.success200(res, getData)

		} else {
			return statusController.badRequest400(res, err)

		}
	} catch (err) {
		res.json({
			'message':err
		})
	}
}

const delete_product = async (req, res) => {
	let product = req.params.id
	console.log(product)

	try {
		let deleteData = await Post.findByIdAndRemove({_id: product})

		if (deleteData) {
			res.json({
				'message':'succes delete data'
			})
		}
		else {
			res.json({
				'message':'error'
			})
		}

	} catch(err) {
		res.json({
			'message':err
		})
	}
}

module.exports = {
	input_items,
	get_all_product,
	delete_product
}