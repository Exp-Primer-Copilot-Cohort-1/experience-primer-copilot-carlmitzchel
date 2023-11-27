// Create web server

var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var comments = [];
var commentsPath = path.join(__dirname, 'comments.json');

// Read comments from comments.json file
fs.readFile(commentsPath, function(err, data) {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  comments = JSON.parse(data);
});

// Get comments
router.get('/', function(req, res) {
  res.json(comments);
});

