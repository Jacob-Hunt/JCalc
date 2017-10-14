/* Object for handling lower-level calculator logic */

var calculator = {

    // Current stored numerical value in calculator memory
    currentNumber: 0.0,

    // String to display on screen
    inputString: "0",

    // Has user already placed a decimal point
    decimalUsed: false,

    // Current mathematical operation
    operation: {
        on: false,
        type: undefined,
    },


    // Handler for button presses
    input: {

        // Number keys
        number: function(num){
            // Clear initial zero to make room for input
            if(calculator.inputString.localeCompare("0") === 0){
                calculator.inputString = "";
            }
            // Append input to display string
            calculator.inputString += num;
        },

        // Decimal key
        decimal: function(){
            if(!calculator.decimalUsed){
                calculator.inputString += ".";
                calculator.decimalUsed = true;
            }
        },

        // Backspace key
        back: function(){
            // If user deletes decimal
            if(calculator.inputString[calculator.inputString.length - 1] === "."){
                calculator.decimalUsed = false;
            }

            // Delete last number of inputString
            calculator.inputString = calculator.inputString.slice(0, -1);

            // If all input deleted
            if(calculator.inputString.localeCompare("") === 0){
                calculator.inputString = "0";
            }
        },

        // AC key
        reset: function(){
            calculator.inputString = "0";
            calculator.decimalUsed = false;
        },
    },

};