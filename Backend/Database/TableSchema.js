const mongoose = require('mongoose')
const TableSchema = new mongoose.Schema({
    usrName: {
        type: String,
        required: true,
        trim: true
    },
    totalPeople: {
        type: String,
        required: true,
        trim: true
    },
    totalChild: {
        type: String,
        required: true,
        trim: true
    },
    totalTable: {
        type: String,
        required: true,
        trim: true
    },
    bookingDate: {
        type: String,
        required: true,
        trim: true
    },
    StartBookingTime: {
        type: String,
        required: true,
        trim: true
    },
    endBookingTime: {
        type: String,
        required: true,
        trim: true
    }
})

const userDBtable = new mongoose.model('tables',TableSchema)

module.exports = userDBtable;