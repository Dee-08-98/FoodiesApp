const mongoose  = require("mongoose");

const userSchema = new mongoose.Schema({
    userName : {
        type : String,
        required : true,
        trim : true
    },
    userEmail : {
        type : String,
        required : true,
        trim : true
    },
    Password : {
        type : String,
        required : true,
        trim : true,
        minlength : 6
    },
    confPassword : {
        type : String,
        required : true,
        trim : true,
        minlength : 6

    }
})

const userDB = new mongoose.model('authentication',userSchema);

module.exports = userDB;