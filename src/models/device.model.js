const { Schema, model } = require('mongoose');

const schema = new Schema({
   status: String
});

module.exports = model('Device', schema);
