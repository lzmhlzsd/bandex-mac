/**
 * Created by lkj on 2015/12/1.
 */
var path = require('path');
var request = require('request');
var moment = require('moment');


var api = require('../../api');
var config = require('../../../../../node_libs/config');
var logger = require('../../../../../node_libs/logger');
var bsj_code = require('../../../../../node_libs/model').bsj_code;
var bsj_user = require('../../../../../node_libs/model').bsj_user;

/**
 * @method 渲染注册页面
 * @author lkj
 * @date   2015/11/30
 */
exports.registerPage = function (req, res) {
    res.render(path.normalize(__dirname + '../../../../web/login/views/login/register.html'), {title: '注册'});
};


/**
 * @method 获取验证码
 * @author leo.lu
 */
exports.getCode = function (req, res) {
    try {
        var newModel = new bsj_code({
            MOBILE: req.body.MOBILE,
            CODE: createCode()
        });
        bsj_code.findOne({MOBILE: req.body.MOBILE}, function (err, data) {
            if (err) {
                return res.json({status: -1, message: err});
            }
            if (data) {
                bsj_code.update({MOBILE: req.body.MOBILE}, {
                    $set: {
                        CODE: createCode(),
                        CRDATE: new Date()
                    }
                }, function (err, raw) {
                    if (err) {
                        return res.json({status: -1, message: err});
                    }
                });
            }
            else {
                newModel.save(function (err, data) {
                    if (err) {
                        return res.json({status: -1, message: err});
                    }
                })
            }
            //预留手机发送短信验证码
            res.json({
                status: 0,
                message: "操作成功！"
            });
        })
    }
    catch (e) {
        logger.error(e.toString());
    }
};

/**
 * @method 注册
 * @author lkj
 * @date   2015/12/2
 */
exports.register = function (req, res) {
    //1.验证注册码是否已经超时，2min
    //2.判断手机号和验证码是否匹配
    //3.注册
    try {
        var newModel = new bsj_user(req.body);
        bsj_code.findOne({MOBILE: req.body.MOBILE}, function (err, data) {
            if (err) {
                return res.json({status: -1, message: err});
            }
            if (data) {
                if (moment().diff(moment(data.CRDATE), 'minutes') > 2) {
                    return res.json({status: -1, message: '验证码已经超时！'});
                }
                else if (req.body.MOBILE == data.MOBILE && req.body.CODE == data.CODE) {
                    //是否已经被注册过
                    bsj_user.findOne({MOBILE: req.body.MOBILE}, function (err, data) {
                        if (err) {
                            return res.json({status: -1, message: err});
                        }
                        if (data) {
                            return res.json({status: -1, message: '该手机号已经被注册！'});
                        }
                        newModel.save(function (err, data) {
                            if (err) {
                                return res.json({status: -1, message: err});
                            }
                            else {
                                res.json({
                                    status: 0,
                                    message: "注册成功！"
                                });
                            }
                        })
                    });
                }
                else {
                    return res.json({status: -1, message: '手机号与验证码不匹配！'});
                }
            }
            else{
                return res.json({status: -1, message: '手机号与验证码不匹配！'});
            }
        });
    }
    catch (e) {
        logger.error(e.toString());
    }
};

/**
 * @method 验证手机号是否已经注册过
 * @author lkj
 * @date   2015/12/2
 */
exports.validateMobile = function (req, res) {
    try {
        bsj_user.findOne({MOBILE: req.body.MOBILE}, function (err, data) {
            if (err) {
                return res.json({status: -1, message: err});
            }
            if (data) {
                return res.json({status: -1, message: '该手机号已经被注册！'});
            }
            res.json({
                status: 0,
                message: "该手机号可以被注册！"
            });
        })
    }
    catch (e) {
        logger.error(e.toString());
    }
};

/**
 * @method 生成验证码
 * @author lkj
 * @date   2015/12/1
 */
function createCode() {
    var num = "";
    for (var i = 0; i < 6; i++) {
        num += Math.floor(Math.random() * 10);
    }
    return num;
}

