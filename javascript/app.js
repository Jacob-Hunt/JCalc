// Declare Angular app
var app = angular.module('app', []);

// Declare controller
app.controller('controller', [
    "$scope",
    function($scope){

        $scope.display = {
            number: calculator.displayString,
            update: function(){
                $scope.display.number = calculator.displayString;
            }
        };

        // Handler for calculator buttons
        $scope.buttons = {

            // Number keys
            number: function(num){
                calculator.input.number(num);
                $scope.display.update();
            },

            back: function(){
                calculator.input.back();
                $scope.display.update();
            },
        };
        
    }
]);