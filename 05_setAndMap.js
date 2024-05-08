//creating a set
const set = new Set()
//adding number in the set
set.add(10);
set.add(20);
set.add(30);
set.add(40);
//creatiung a map
const squaresMap = new Map();
//adding number and it's square in the map
set.forEach(number => {
    squaresMap.set(number, number * number);
});
//pring the number and it's square
squaresMap.forEach((square, number) => {
    console.log(`${number} => ${square}`);
});
