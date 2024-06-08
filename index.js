const path = require('path')
const express = require('express')
const app = express()
const PORT = 8000
const userRoute = require('./routes/userRoute')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/blogDB').then((e) => console.log("Database connected"))

app.use(express.urlencoded({extended:false}))
app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))
app.get("/", (req,res) =>{
    res.render("home")
})
app.use("/user", userRoute)

app.listen(PORT, () =>{
    console.log(`server is running on http://localhost:${PORT}`);
})