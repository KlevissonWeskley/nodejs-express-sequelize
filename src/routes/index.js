const express = require('express');
const peoples = require('./peoplesRoutes.js');
const categories = require('./categoriesRoutes.js');
const courses = require('./coursesRoutes.js');

module.exports = app => {
  app.use(
    express.json(),
    peoples,
    categories,
    courses
  );
};
