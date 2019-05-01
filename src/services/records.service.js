const recordsModel = require('../models/records.model');

const findAll = () => recordsModel.find();

const find = id => recordsModel.findOne({_id: id});

const create = items => recordsModel.create({...items});

const update = (id, fields) => recordsModel.update({_id: id}, {$set: fields});

const remove = id => recordsModel.deleteOne({_id: id});

module.exports = {
    find,
    findAll,
    create,
    update,
    remove
};