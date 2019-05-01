const records = require('./records');

module.exports = app => {
    app.get('/records', records.readAll);
    app.get('/records/:id', records.readOne);
    app.post('/records', records.create);
    app.patch('/records/:id', records.update);
    app.delete('/records/:id', records.remove)
};