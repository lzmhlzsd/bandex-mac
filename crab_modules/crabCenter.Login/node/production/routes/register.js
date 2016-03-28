/**
 * Created by lkj on 2015/12/1.
 */
var registerCtrl = require('../controller/registerCtrl');

module.exports = function (app) {
    app.get('/register', registerCtrl.registerPage);
    app.post('/getCode', registerCtrl.getCode);
    app.post('/register', registerCtrl.register);
    app.post('/validateMobile',registerCtrl.validateMobile);
};