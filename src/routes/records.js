const records = require('../services/records.service');

const readAll = (req, res) => records
    .findAll()
    .then(data => res.status(200).send(data))
    .catch(err => res.status(500).send(err));

const readOne = ({params}, res) => records
    .find(params.id)
    .then(data => res.status(200).send(data))
    .catch(err => res.status(500).send(err));

const update = ({body, params}, res) => records
    .update(params.id, body)
    .then(data => res.status(200).send(data))
    .catch(err => res.status(500).send(err));

const create = ({body}, res) => records
    .create(body)
    .then(data => res.status(200).send(data))
    .catch(err => res.status(500).send(err));

const remove = ({params}, res) => records
    .remove(params.id)
    .then(data => res.status(200).send(data))
    .catch(err => res.status(500).send(err));

module.exports = {
    readAll,
    readOne,
    create,
    remove,
    update
};