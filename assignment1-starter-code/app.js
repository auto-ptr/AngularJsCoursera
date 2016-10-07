(function () {
    'use strict';
    var app = angular.module('myApp', []);

    app.controller('LunchCtrl', ['$scope', function ($scope) {
        $scope.msg = '';
        $scope.list = '';
        $scope.msgcolor = '';
        $scope.num = 0;

        $scope.dispNum = function () {
            var count = countOfMeals($scope.list);
            $scope.num = count;
            $scope.msg = setMessage(count);
            setColor(count);
        }

        function setColor(len) {
            if (len == 0)
                $scope.msgcolor = "red";
            else
                $scope.msgcolor="green";
        }

        function setMessage(len) {
            var msg = "";
            if (len == 0) {
                msg = "Please enter data first";
            }
            else if (len <= 3 && len > 0)
                msg = "Enjoy!";
            else
                msg = "Too much!";
            return msg;
        }

        function countOfMeals(list) {
            var count = 0;
            var item = list.split(',');
            for (var i = 0; i < item.length; i++) {
                if (item[i].trim() != "")
                    count++;
            }
            return count;
        }
    }]);

})();


