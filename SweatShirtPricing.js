const sweatShirtPricing = (numShirts) => {
    //define a variable cost to return
    let cost  = 0;
    //define a constant for the cost per shirt
    const shirtCost = 20;
    //define a variable for the tota % discount
    let discount = 1;
    //define the discount based on the amount of shirts
    if (numShirts === 2) {
        discount = .91;
    } else if (numShirts === 3) {
        discount = .81;
    } else if (numShirts > 3 ) {
        discount = .65;
    }
    // multiply the numShirts by the cost and apply the final % discount
    cost  = Math.round(numShirts * shirtCost * discount);
    return cost;
}

console.log(sweatShirtPricing(8));