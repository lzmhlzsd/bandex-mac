/**
 * Created by lkj on 2015/11/25.
 */
angular.module('loginApp', ['visualCaptcha'])
    .controller('loginCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.login = function (isValid) {
            if (isValid) {
                var data = {
                    MOBILE: $scope.MOBILE,
                    PWD: $scope.PWD
                }
                $http.post('/login', JSON.stringify(data))
                    .success(function (result) {
                        if (result.status == 0) {
                            alert(result.message);
                        }
                        else {
                            alert(result.message);
                        }
                    });
            }
        }
        $scope.captchaOptions = {
            imgPath: '../common/img/',
            language: {
                accessibilityAlt: 'Sound icon',
                accessibilityTitle: 'Accessibility option: listen to a question and answer it!',
                accessibilityDescription: '',
                explanation: '请点击下图中的 <strong>ANSWER</strong>',
                refreshAlt: 'Refresh/reload icon',
                refreshTitle: 'Refresh/reload: get new images and accessibility option!'
            },
            captcha: {
                numberOfImages: 5,
                routes: {
                    start: '../../start',
                    image: '../../image'
                },
                callbacks: {
                    loaded: function (captcha) {
                        var _bindClick = function (element, callback) {
                            if (element.addEventListener) {
                                element.addEventListener('click', callback, false);
                            } else {
                                element.attachEvent('onclick', callback);
                            }
                        };
                        var anchorOptions = document.getElementById('sample-captcha').getElementsByTagName('a');
                        //var anchorOptions = $('#sample-captcha .visualCaptcha-possibilities a');
                        var anchorList = Array.prototype.slice.call(anchorOptions);
                        anchorList.forEach(function (anchorItem) {
                            _bindClick(anchorItem, function (event) {
                                //验证
                                if(!$(this.parentNode).is($('.visualCaptcha-refresh-button'))) {
                                    var par = {}
                                    par[$scope.captcha.imageFieldName()] = $scope.captcha.imageValue($(this).parent().index());
                                    $http.post('/try', par)
                                        .success(function (result) {
                                            if (result.status == 0) {
                                                alert(result.message);
                                            }
                                            else {
                                                $scope.captcha.refresh();
                                            }
                                        });
                                }
                                else {
                                    $scope.captcha.refresh()
                                }
                                event.preventDefault();
                            });
                        });
                    }
                }
            },
            init: function (captcha) {
                $scope.captcha = captcha;
            }
        };

    }])