// Declare Angular app
var app = angular.module('app', []);

// Declare controller
app.controller('controller', [
    "$scope",
    function($scope){

        // Calculator screen
        $scope.display = {
            number: calculator.inputString,
            memory: calculator.memoryString,
            update: function(){
                $scope.display.number = calculator.inputString;
                $scope.display.memory = calculator.memoryString;
            }
        };

        // Handler for calculator buttons
        $scope.buttons = {

            // Number keys
            number: function(num){
                calculator.methods.clearUndefined();
                calculator.input.number(num);
                $scope.display.update();
            },

            // Operator keys
            operator: function(sym){
                calculator.methods.clearUndefined();
                calculator.input.operator(sym);
                $scope.display.update();
            },

            // Decimal point key
            decimal: function(){
                calculator.methods.clearUndefined();
                calculator.input.decimal();
                $scope.display.update();
            },

            // Backspace key
            back: function(){
                calculator.methods.clearUndefined();
                calculator.input.back();
                $scope.display.update();
            },

            // AC key
            reset: function(){
                calculator.input.reset();
                $scope.display.update();
            },

            // Equals key
            equals: function(){
                calculator.methods.clearUndefined();
                calculator.input.equals();
                $scope.display.update();
            }
        };
        
    }
]);