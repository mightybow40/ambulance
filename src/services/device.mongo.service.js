const deviceModel = require('../models/device.model');

const findAll = () => deviceModel.find();

const find = id => deviceModel.findOne({_id: id});

const create = items => deviceModel.create({...items});

const update = (id, fields) => deviceModel.update({_id: id}, {$set: fields});

const remove = id => deviceModel.deleteOne({_id: id});

module.exports = {
    find,
    findAll,
    create,
    update,
    remove
};