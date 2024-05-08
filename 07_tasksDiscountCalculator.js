//creating discountCalculator object
const discountCalculator = {
    discountPercentage: 15,
    applyDiscount: function(price){
        let discountAmount = ((this.discountPercentage)*price)/100;
        let discountedPrice = price - discountAmount;
        return discountedPrice;
    }
}

//creating calculate discount function
const calculateDiscount = discountCalculator.applyDiscount.bind(discountCalculator)

console.log(calculateDiscount(100))
console.log(calculateDiscount(200))