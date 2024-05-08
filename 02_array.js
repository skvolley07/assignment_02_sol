const ages = [19,22,19,24,20,25,26,24,25,24]

//sorting the given array

ages.sort((a,b) => a-b)
console.log(`Sorted array : ${ages}`)

//finding min and max ages
const minAge = Math.min.apply(null,ages)
const maxAge = Math.max.apply(null,ages)

console.log(`Minimum age in th given array is ${minAge}`)
console.log(`Maximum age in th given array is ${maxAge}`)

//Finding Median age

let medianAge;
if(ages.length%2 === 0){
    medianAge = (ages[ages.length/2] + ages[(ages.length + 2)/2])/2
}
else{
    medianAge = ages[(ages.length + 1)/2]/2
}
console.log(`Median age : ${medianAge}`)

//Finding average age

function sum(num1,num2){
    return num1+num2;
}
let avgAge = 0;
for(let i=0; i<ages.length; i++ ){
    avgAge = sum(avgAge, ages[i])
}
avgAge = avgAge/ages.length

console.log(`Average age : ${avgAge}`)

//finding range of the ages
let rangeOfAges = maxAge - minAge;
console.log(`Range of the ages : ${rangeOfAges}`)