/**
 * Created by lkj on 2016/3/27.
 */
var indexCtrl = require('../controller/indexCtrl');
var configCtrl = require('../controller/configCtrl');

module.exports = function (app) {
    app.get('/', indexCtrl.redirect);
    app.get('/index', indexCtrl.index);

    app.get('/log', indexCtrl.log);

    app.get('/config', configCtrl.config);
    app.post('/saveConfig',configCtrl.saveConfig);

    app.get('/mem', indexCtrl.mem);
};