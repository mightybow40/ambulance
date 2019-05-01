const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect(`mongodb://127.0.0.1:27017/ambulance`, { useNewUrlParser: true });

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log('Connected');
    });
};
