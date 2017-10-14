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


    // Misc. methods
    methods: {
        clearInputString: function(){
            // Reset input without clearing memory
            calculator.operation.on = false;
            calculator.decimalUsed = false;
            calculator.inputString = "0";
        }
    },

    // Mathematical operation handler
    operation: {
        // Has user applied an operator to input string
        on: false,

        store: function(){
            // Store operation in memory and clear inputString
            calculator.memoryString += calculator.inputString;
            calculator.methods.clearInputString();
        },

        apply: function(type){
            // apply an operation to inputString

            // If user has already pressed an operator key, replace
            // the previous operation with the new one
            if(calculator.operation.on){
                calculator.inputString = calculator.inputString.slice(0, -3);
                calculator.inputString += " " + type + " ";
            } 

            // If user has deleted all numbers in input string but
            // not cleared memory
            else if(calculator.inputString === "0"
            && calculator.memoryString !== ""){
                calculator.memoryString = calculator.memoryString.slice(0, -3);
                calculator.memoryString += " " + type + " ";
            }

            // If user has not provided any input
            else if(calculator.inputString === "0" 
            && calculator.memoryString === ""){
                return;
            }
            
            // If inputString ends with a decimal
            else if(calculator
            .inputString[calculator.inputString.length - 1]
            === "."){
                return;
            }

            // Default case
            else{
                calculator.operation.on = true;
                calculator.inputString += " " + type + " ";
            }
        },

        undo: function(){
            // Undo an apply() call
            
            // Sanity check
            if(!calculator.operation.on){
                return;
            }

            // Truncate input string
            calculator.inputString = calculator.inputString.slice(0, -3);

            // Turn off control variable
            calculator.operation.on = false;
        }
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
             calculator.operation.apply(type);
        },

        // Decimal key
        decimal: function(){

            // If user has already applied a mathematical operation
            // to inputString
            if (calculator.operation.on){
                calculator.operation.store();
            }

            // If inputString doesn't already contain a decimal point
            if(!calculator.decimalUsed){
                calculator.inputString += ".";
                calculator.decimalUsed = true;
            }
        },

        // Backspace key
        back: function(){
            // If user has already applied an operator to input
            if(calculator.operation.on){
                calculator.operation.undo();
                return;
            }

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
            calculator.methods.clearInputString();
            calculator.memoryString = "";
        },
    },

};