// Declare Angular app
var app = angular.module('app', []);

// Declare controller
app.controller('controller', [
    "$scope",
    function($scope){

        $scope.model = {display: displayVal};

        $scope.inputNum = function(num){
            calculator.input.number(num);
            $scope.model.display = calculator.displayString;
        };
        
    }
]);