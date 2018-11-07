const express = require('express');
const app = express();
const Router = express.Router();

Router.route('/').get(function (req, res) {
  res.render('index');
});

module.exports = Router;