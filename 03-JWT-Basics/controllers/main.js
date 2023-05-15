const jwt = require("jsonwebtoken")
const {BadRequest} = require('../errors')

const login = async (req,res) => {
    const {username, password} = req.body;
    // mongoose validation 
    // joi 
    // check in controller 
    console.log(username, password);

    if(!username  || !password){
        throw new BadRequest("Please Enter Username && Password You Idiot !!.......")
    }
    // just for demo, normally provided by db!!!
    const id = new Date().getDate();


    // try to keep payload small, better experience for users
    // just for demo only, in production use long, complex and unguessable string value !!!
    const token = jwt.sign({id, username},process.env.JWT_SECRET,{expiresIn:'30d'})
    res.status(200).json({msg : "User is created",token})
}

const dashboard = async (req,res) => {
    console.log(req.user,"hello");

    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({msg: `Hello ${req.user.username}`,secret : `Here is your authorized data, your luck number is ${luckyNumber}`})

   
}

module.exports = {
    login,
    dashboard,
}
