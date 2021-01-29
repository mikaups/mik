const mongoose = require('mongoose')

const signUpTemplate = new mongoose.Schema({
    fullName:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    date:{
        type: Date,
        default: Date.now
    }

})
module.exports = mongoose.model('mytable', signUpTemplate)
