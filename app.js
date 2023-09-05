const express = require('express')
const app = express()

app.set('view engine', 'ejs')

//form bata data parse gar ani handel gar node lai
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.render("blogs")
})

app.get("/createBlog", (req, res) => {
    res.render("createBlog")
})

app.post("/createBlog", (req, res) => {
    console.log(req.body.title)
    res.send("form submitted successfully")
})
app.listen(3000, () => {
    console.log("Nodejs project started")
})