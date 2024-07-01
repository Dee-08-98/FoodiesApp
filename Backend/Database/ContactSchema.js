const mongoose  = require("mongoose");

const ContactSchema = new mongoose.Schema({
    Name : {
        type : String,
        required : true,
        trim : true
    },
    Email : {
        type : String,
        required : true,
        trim : true
    },
    ContactNo : {
        type : String,
        required : true,
        trim : true,
        minlength : 10
    },
    Message : {
        type : String,
        required : true,
        trim : true,
        

    }
})

const userDBCon = new mongoose.model('cotact',ContactSchema);

module.exports = userDBCon;