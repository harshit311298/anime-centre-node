const router = require('express').Router()
const auth = require('../../middleWare/auth');
var multer = require("multer");
var upload = multer({ dest: "uploads/" });
