/**
 * Created by lkj on 2016/3/27.
 */
var sysCtrl = require('../controller/sysCtrl');

module.exports = function(app){
    app.get('/index',sysCtrl.index);
};