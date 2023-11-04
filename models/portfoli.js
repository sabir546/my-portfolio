const mongoose = require('mongoose')
const portfolio = new mongoose.Schema({
    name: String,
    email:String,
    mobile_no: Number,
    email_sub: String,
    message: String,
})
module.exports = mongoose.model('database', portfolio)
