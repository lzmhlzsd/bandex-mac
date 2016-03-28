/**
 * Created by lkj on 2015/11/23.
 */

var express = require('express');
var fs = require('fs');
var path = require('path');
var logger = require('./logger');

//加载静态文件
module.exports = function (app) {
    var modules_path = __dirname + '/../crab_modules';
    fs.readdirSync(modules_path).forEach(function (file) {
        app.use(express.static(path.join(__dirname, '../crab_modules/' + file + '/web')));
    });
}