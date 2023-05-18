const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    userImg: {
        data: Buffer,
        contentType: String
    },
    bio: {
        type: String,
        required: true
    },

});

module.exports = mongoose.model('User', userSchema);

