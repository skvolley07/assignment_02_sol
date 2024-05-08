const person1 = {
    name: "Saurabh Kadtan",
    age: 20
};
const person2 = {
    name: "Sunil Kadtan",
    age: 46
};

const introduce = function(){
    console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`)
}

introduce.call(person2)