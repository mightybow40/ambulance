const { Schema, model } = require('mongoose');

const schema = new Schema({
    user_id: String,
    device_id: String,
    heart_stats: [Number],
    optional_value: Number,
});

module.exports = model('Record', schema);
