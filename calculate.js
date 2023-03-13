const calculate = (numOne, numTwo, operation) => {
    switch(operation) {
        case 'add' : 
            console.log(numOne + numTwo);
            break; 
            
        case 'subtract' : 
            console.log(numOne - numTwo);
            break;
            
        case 'multiply' : 
            console.log(numOne * numTwo);
            break; 
            
        case 'divide' :
            console.log(numOne / numTwo);
            break; 
            
        default :
            console.log('Invalid');
            break;
    }
}
const userInputOne = Number(prompt('Choose any number:'))
const userInputTwo = Number(prompt('Choose any number:'))
const userInputThree = prompt('Choose one: add, subtract, multiply, divide:')
calculate(userInputOne, userInputTwo, userInputThree)
