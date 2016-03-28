/**
 * Created by lkj on 2015/11/25.
 */
angular.module('registerApp', [])
    .controller('registerCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {
        $scope.btntitle = "获取校验码";
        $scope.register = function (isValid) {
            if (!isValid) {
                var data = {
                    user_name: $scope.user_name,
                    user_pwd: $scope.user_pwd,
                    org_name:$scope.org_name,
                    user_email:$scope.user_email,
                    user_phone:$scope.user_phone,
                    validate_code:$scope.validate_code
                }
                $http.post('/register', JSON.stringify(data))
                    .success(function (result) {
                        if (result.status == 0) {
                            location.href = '/login';
                        }
                        else {
                            alert(result.message);
                        }
                    })
            }
        }
        $scope.getCode = function () {
            $scope.countdown = 60;
            $scope.disabled = false;
            var myTime = setInterval(function () {
                $scope.countdown--;
                if ($scope.countdown <= -1) {
                    clearInterval(myTime);
                    $scope.btntitle = "重新获取";
                    $scope.disabled = false;
                }
                else {
                    $scope.btntitle = "重新获取(" + $scope.countdown + "S)";
                    $scope.disabled = true;
                }
                $scope.$apply();
            }, 1000);
            //发送验证码
            $http.post('/getCode', JSON.stringify({MOBILE: $scope.MOBILE}))
                .success(function (result) {
                    if (result.status != 0) {

                    }
                })
        }
    }]);