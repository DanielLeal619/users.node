const { getAll, create, remove, update, getOne } = require('../controllers/user.controllers');
const express = require('express');

const user = express.Router();

user.route("/")
    .get(getAll)
    .post(create)

user.route("/:id")
    .get(getOne)
    .delete(remove)
    .put(update)

module.exports = user;