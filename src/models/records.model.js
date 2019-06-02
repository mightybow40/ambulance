const { Schema, model } = require('mongoose');

const schema = new Schema({
    user_id: String,
    device_id: String,
    heart_stats: [Number],
    min_value: Number,
    max_value: Number
});

module.exports = model('Record', schema);
