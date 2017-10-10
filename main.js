// Global Variables
var displayVal = "0";

// Functions
var inputNum = function(num){

    // Clear initial zero to make room for input
    if(displayVal.localeCompare("0") === 0){
        displayVal = "";
    }

    // Append input to displayVal string
    displayVal += num;
}

// Declare Angular app
var app = angular.module('app', []);

// Declare controller
app.controller('controller', [
    "$scope",
    function($scope){

        $scope.model = {display: displayVal};

        $scope.inputNum = function(num){
            inputNum(num);
            $scope.model.display = displayVal;
        };
        
    }
]);