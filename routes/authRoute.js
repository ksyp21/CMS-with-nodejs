const { registerUser, renderRegisterForm, renderLoginForm, loginUsers } = require("../controller/auth/authController")

const router = require("express").Router()


router.route("/register").get(renderRegisterForm).post(registerUser)
router.route("/login").get(renderLoginForm).post(loginUsers)


module.exports = router;