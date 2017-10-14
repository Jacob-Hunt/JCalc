/* Object for handling lower-level calculator logic */

var calculator = {

    // Current stored numerical value in calculator memory
    currentNumber: 0.0,

    // Current user input
    inputString: "0",

    // Operation(s) in memory
    memoryString: "",

    // Has user already placed a decimal point
    decimalUsed: false,

    // Current mathematical operation
    operation: {
        on: false,
        store: function(){
            calculator.memoryString += calculator.inputString;
            calculator.operation.on = false;
            calculator.inputString = "0";
        },
    },


    // Handler for button presses
    input: {

        // Number keys
        number: function(num){
            // If there is a pending operation to be stored
            if(calculator.operation.on){
                calculator.operation.store();
            }

            // Clear initial zero to make room for input
            if(calculator.inputString.localeCompare("0") === 0){
                calculator.inputString = "";
            }
            // Append input to display string
            calculator.inputString += num;
        },

        // Operator keys
        operator: function(type){
            // If user has already pressed an operator key, replace
            // the previous operation with the new one

            // TODO: handle case of inputString === "0"
            // TODO: handle case of inputString === "0"
            //       && memoryString !== ""

            if(calculator.operation.on){
                calculator.inputString = calculator.inputString.slice(0, -3);
            }
            calculator.operation.on = true;
            calculator.inputString += " " + type + " ";
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
            calculator.memoryString = "";
            calculator.decimalUsed = false;
        },
    },

};