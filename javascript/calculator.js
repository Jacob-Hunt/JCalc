var calculator = {

    // Current stored numerical value in calculator memory
    currentNumber: 0.0,

    // String to display on screen
    displayString: "0",


    // Handler for decimal points
    decimalPoint: {
        on: false,
        position: undefined
    },
    

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
            if(calculator.displayString.localeCompare("0") === 0){
                calculator.displayString = "";
            }
            // Append input to display string
            calculator.displayString += num;
        },

        // Backspace button
        back: function(){
            calculator.displayString = calculator.displayString.slice(0, -1);
            if(calculator.displayString.localeCompare("") === 0){
                calculator.displayString = "0";
            }
        }
    },

};