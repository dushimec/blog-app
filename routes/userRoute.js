const {Router} = require("express")
const User = require('../models/userModel')
const router = Router();

router.get("/signin", (req,res) =>{
    return res.render("signin")
})
router.get("/signup", (req,res) =>{
    return res.render("signup")
})

router.post("/signup", async(req,res) =>{
    const {fullName, email, password} = req.body
   const savedUser =  await User.create({
        fullName,
        email,
        password,
    })
    //res.status(200).json(savedUser)
    return res.redirect("/")
})

router.post("/signin", async(req,res) =>{
    const { email, password} = req.body

    const user = await User.macthPassword(email, password)
    console.log('User', user);
    return res.redirect("/")
})



module.exports = router;