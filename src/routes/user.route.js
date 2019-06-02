const userService = require('../services/user.mongo.service');

const findAll = (req, res) => userService
    .findAll()
    .then(data => res.status(200).send(data))
    .catch(err => res.status(500).send(err));

const find = ({params}, res) => userService
    .find(params.id)
    .then(data => res.status(200).send(data))
    .catch(err => res.status(500).send(err));

const create = ({body}, res) => userService
    .create(body)
    .then(data => res.status(200).send(data))
    .catch(err => res.status(500).send(err));

const update = ({params, body}, res) => userService
    .update(params.id, body)
    .then(data => res.status(200).send(data))
    .catch(err => res.status(500).send(err));

module.exports = {
    findAll,
    find,
    create,
    update
};