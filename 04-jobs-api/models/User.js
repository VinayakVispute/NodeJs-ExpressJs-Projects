const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const UserScheme = new mongoose.Schema({
    name:{
        type:String,
        require : [true,'Pleaswse Provide the Name'],
        minlength : [3, "Too Short, Length more than 3 is required"],
        maxlength : [50, "Too Large, Length more than 50 is required"],
    },
    email:{
        type:String,
        required: [true, "Please Provide Email"],
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please pprovide valid email'],
        unique : true,
    },
    password : {
        type: String,
        required: [true, 'Please Provide Password'],
        minlength: [6, "Minimum Password Length should be greater then 6"],
    },
})
UserScheme.pre('save',async function(next){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

UserScheme.methods.createJWT = function(){
   return jwt.sign({userId:this._id,name:this.name},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_LIFETIME,
    })
}

UserScheme.methods.comparePassword = async function(canditatePassword){
    const isMatch = await bcrypt.compare(canditatePassword,this.password)
    return isMatch
}


module.exports = mongoose.model('User',UserScheme);
