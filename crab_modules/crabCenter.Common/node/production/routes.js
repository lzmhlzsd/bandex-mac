/**
 * Created by lkj on 2016/3/27.
 */
var sys = {};
sys.main = require('./routes/sys');

module.exports = function (app) {
    sys.main(app);
};