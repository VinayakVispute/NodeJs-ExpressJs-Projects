const mongoose = require('mongoose')


const TaskSchema = new mongoose.Schema({
    name :String,
    complteted:Boolean   
})

module.exports= mongoose.model('Task' ,TaskSchema)