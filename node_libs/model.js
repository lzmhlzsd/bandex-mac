/**
 * Created by lkj on 2015/11/30.
 */
var mongoose = require('mongoose');
var config = require('./config');
var fs = require('fs');
var path = require('path');
var logger = require('./logger');

mongoose.connect(config.mongodb);
var db = mongoose.connection;
db.on('error', function (err) {
    logger.error('connect to ' + config.mongodb + ' error: ' + err.message);
    process.exit(1);
});
db.once('open', function () {
    logger.info(config.mongodb + ' has been connected.');
})

//加载model
//module.exports=function(app) {
var modules_path = __dirname + '/../crab_modules';
fs.readdirSync(modules_path).forEach(function (file) {
    if (file != 'crabCenter.Login') {
        var models_path = __dirname + '/../crab_modules/' + file + '/node/production/model';
        //console.log(models_path)
        fs.readdirSync(models_path).forEach(function (file) {
            require(models_path + '/' + file);
            var modelName = file.replace('Model.js', '');
            logger.info(modelName + ' 实例化成功！');
            exports[modelName] = mongoose.model(modelName, modelName);
        });
    }

});
//}
