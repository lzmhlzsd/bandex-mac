/**
 * Created by lkj on 2015/11/23.
 */
var mainCtrl = require('../controller/mainCtrl');

module.exports = function(app){
    app.get('/main',mainCtrl.index);
};