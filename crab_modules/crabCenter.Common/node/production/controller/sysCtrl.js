/**
 * Created by lkj on 2016/3/27.
 */

var path = require('path');


exports.index = function (req, res) {
    res.render(path.normalize(__dirname + '../../../../web/common/views/index.html'), {title: '首页'});
};


exports.redirect = function (req, res) {
    res.redirect('/index');
};

exports.log = function (req, res) {
    res.render(path.normalize(__dirname + '../../../../web/common/views/log.html'), {title: '首页'});
};

