const { users } = require("../../model")
const bcrypt = require("bcrypt")
exports.renderRegisterForm = (req, res) => {
    res.render("register")
}

exports.registerUser = async (req, res) => {
    const { email, username, password, confirmPassword } = req.body

    // const email = req.body.email
    // const password = req.body.password
    // const username = req.body.username

    //check confirm password matches the password or not
    // if (password.toLowerCase() !== confirmpassword.toLowerCase()) {
    //     return res.send("Password and confirm password does not match")
    // }
    if (password !== confirmPassword) {
        return res.send("Password and confirm password does not match")
    }

    //insert into tables(user)
    await users.create({
        email: email,
        username: username,
        password: bcrypt.hashSync(password, 8)
    })
    res.redirect("/login")
}

//Login controller

exports.renderLoginForm = (req, res) => {
    res.render("login")
}