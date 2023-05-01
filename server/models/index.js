const mongoose = require('mongoose');
const listSchema = new mongoose.Schema({
    content: {
        type:String,
    }
})
const lists = mongoose.model('lists', listSchema);
module.exports = lists;