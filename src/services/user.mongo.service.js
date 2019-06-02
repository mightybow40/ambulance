const userModel = require('../models/user.model');

const findAll = () => userModel.find();

const find = id => userModel.findOne({_id: id});

const create = items => userModel.create({...items});

const update = (id, fields) => userModel.update({_id: id}, {$set: fields});

module.exports = {
    find,
    findAll,
    create,
    update,
    remove
};