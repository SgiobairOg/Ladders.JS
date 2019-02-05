/*jslint node: true */
"use strict";

var express = require("express");
var router = express.Router();

var root = require("./root.route");

router.get("/", root.getRoot);

module.exports = router;
