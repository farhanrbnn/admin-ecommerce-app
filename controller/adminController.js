const Admin = require('../model/admin')
const statusController = require('../controller/statusController')
const bcrypt = require('bcrypt')

const register = async (req, res) => {
	let admin = new Admin ({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		password: req.body.password
	})

	let validatePass = {confirm: req.body.confirmPassword}

	try {
		let validate = await Admin.findOne({email: req.body.email})

		if (validate) {
			return statusController.badRequest400(res, 'user already exist')
		}

		if (validatePass != admin.password) {
			return statusController.badRequest400(res, "password doesn't match")

		} else {
			let encrypted = await bcrypt.genSalt(10)
			admin.password = await bcrypt.hash(admin.password, encrypted)

			let savedPost = await user.save()

			return res.json({
				'message': 'success add admin'
			})
		} 	

	} catch(err) {
		return res.json({
			'message': 'something went wrong'
		})
	}

}

module.exports = {
	register
}