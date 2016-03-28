/**
 * Created by lukaijie on 16/3/28.
 */
var path = require('path');
var redis = require('../../../../../node_libs/redis');

exports.config = function (req, res) {
    res.render(path.normalize(__dirname + '../../../../web/common/views/config.html'), {title: '设置'});
};

exports.saveConfig = function (req, res) {
    var data = req.body;
    redis.client.set("11", data.weixin);
    return 0;
};