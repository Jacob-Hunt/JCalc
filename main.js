// Angular App
var app = angular.module('app', []);

// Global Variables
var displayVal = "0";

// Functions
var inputNum = function(num){
    displayVal += num;
}

app.controller('controller', [
    "$scope",
    function($scope){

        $scope.model = {display: displayVal};

        $scope.inputNum = function(num){
            inputNum(num);
            $scope.model.displayVal = displayVal;
            $scope.model.display = "OMFG BACON";
        };
        
    }
]);