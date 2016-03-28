/**
 * Created by lkj on 2015/12/1.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var schema = new Schema({
    MOBILE: String,
    CODE: String,
    CRDATE: {type: Date, default: Date.now}
});

mongoose.model('bsj_code', schema);