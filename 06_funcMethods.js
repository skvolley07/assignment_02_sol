const displayInfo = function(name,role){
    console.log(`I'm ${name} and I'm a ${role}`);
}
//invoking function using call method
// displayInfo.call(null,"Saurabh Kadtan", "Web Developer")
//invoking function using apply method
// displayInfo.apply(null,["Saurabh Kadtan", "Web Developer"])

//creating new function

const greet = function(){
    console.log(`Hello, I'm ${this.name}`)
}
//using bind method
const boundGreet = greet.bind({name: "Saurabh Kadtan"});
boundGreet()
