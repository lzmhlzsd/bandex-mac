/**
 * Created by lkj on 2015/11/23.
 */

var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var ejs = require('ejs');
var path = require('path');
var config = require('./node_libs/config');
var logger = require('./node_libs/logger');
var session = require('express-session');

var app = express();
app.set('port', config.port);

app.engine('.html', ejs.__express);
app.set('view engine', 'html');

// Set session information
app.use(session({
    cookieName: 'session',
    secret: 'someRandomSecret!',
    duration: 24 * 60 * 60 * 1000,
    activeDuration: 1000 * 60 * 5
}));

var staticfiles = require('./node_libs/static');
staticfiles(app);

app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


var routes = require('./node_libs/routes');
routes(app);
//require('./node_libs/model');
require('./node_libs/redis');

app.listen(app.get('port'), function () {
    logger.info('服务启动成功,端口:' + app.get('port'));
});