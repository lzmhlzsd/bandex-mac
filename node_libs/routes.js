/**
 * Created by lkj on 2015/11/23.
 */

var config = require('./config');
var fs = require('fs');
var path = require('path');
var logger = require('./logger');

//加载路由
module.exports=function(app) {
    var modules_path = __dirname + '/../crab_modules';
    var routes = {};
    fs.readdirSync(modules_path).forEach(function (file) {
        if (file != 'crabCenter.Login') {
            routes[file] = require('../crab_modules/' + file + '/node/' + config.node_env + '/routes.js');
            routes[file](app);
            logger.info('模块--' + file + ' 加载成功！');
        }

    });
}