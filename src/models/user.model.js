const { Schema, model } = require('mongoose');

const schema = new Schema({
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    device_id: String
});

module.exports = model('Users', schema);
