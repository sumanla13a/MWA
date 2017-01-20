'use strict';

var express 	= require('express');
var router 		= express.Router();
var path		= require('path');
var inventor	= require(path.join(global.appRoot, 'model/inventors.json'));

router.get('/', function(req, res, next) {
	res.render('inventors', {inventors: inventor});
});

module.exports = router;
