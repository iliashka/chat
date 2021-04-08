const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        requred: true,
        trim: true
    },
    lastName: {
        type: String,
        requred: true,
        trim: true
    },
    email: {
        type: String, 
        requred: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    accessToken: {
        type: String
    },
    hashKey: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'user',
        enum: ['user', 'admin']
    },
});

const User = mongoose.model('user', userSchema);
module.exports = User