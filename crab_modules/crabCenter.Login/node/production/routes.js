/**
 * Created by lkj on 2015/11/23.
 */

var Login = {};
Login.main = require('./routes/main');
Login.login = require('./routes/login');
Login.register = require('./routes/register');

module.exports = function (app) {
    Login.main(app);
    Login.login(app);
    Login.register(app);
};