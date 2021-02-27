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

module.exports = {
	input_items
}