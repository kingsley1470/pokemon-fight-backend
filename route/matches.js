const express = require("express");
const matchRoute = express.Router();
const {createNewMatch} = require('../controllers/matchControllers.js')

matchRoute.route('/').post(createNewMatch);

module.exports = matchRoute;