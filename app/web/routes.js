var db = require('./db/dbConfig.js');
var router = require('express').Router();
var neo4j = require('neo4j');


router.post('/character', function (req, res) {
  Projects.create({
    name: req.body.projectName,
    timeConstraint: req.body.timeConstraint,
    wanted: req.body.wanted,
    description: req.body.description
  }).then(function(project_attributes){
    db.knex('Users').where({
      "username": req.body.username
    }).select('id')
