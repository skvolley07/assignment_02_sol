//creating calculator
const calculator = {
    add: (a,b) => a+b,
    subtract: (a,b) => a-b,
    multiply: (a,b) => a*b,
    calculate: function(operation, num1, num2){
        return operation(num1,num2)
    }
};
//using call method to perform the addition
console.log(calculator.calculate.call(null,calculator.add, 4, 5))
//using apply method to perform the multiplication
console.log(calculator.calculate.apply(null,[calculator.multiply, 4, 5]))