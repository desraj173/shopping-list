const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
    },
    last_name: {
        type: String,
    },
    email: {
        type: String,
    },
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    Access_Token: {
        type: Array,
        token: {
            type: String
        }
    },

    created_at: {
        type: String,
        default: Date.now
    }
})

module.exports = User = mongoose.model('user', UserSchema);


