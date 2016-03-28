/**
 * Created by lkj on 2016/3/27.
 */

var path = require('path');

exports.index = function (req, res) {
    console.log(__dirname);
    res.render(path.normalize(__dirname + '../../../../web/common/views/index.html'), {title: '首页'});
};