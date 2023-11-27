// create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const http = require('http').Server(app);

// connect to database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/comments');

// create schema for comments
const CommentSchema = mongoose.Schema({



