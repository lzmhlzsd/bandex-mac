/**
 * Created by lkj on 2015/11/23.
 */
var path = require('path');

exports.index = function (req, res) {
    var html = path.normalize(__dirname+'/../../../../view/admin/views/main/index.html');
    res.sendfile(html);

    //res.render(__dirname + '/../../../../web/main/header.html');
};