const sweatshirt = (amount) => {
    const price = 20;
    let total = 0;
    if (amount === 2) {
        total = (amount * price) * 0.91;
    } else if (amount === 3) {
        total = (amount * price) * 0.81;
    } else if (amount > 3) {
        total = (amount * price) * 0.65;
    } else {
        total = price;
    }
    console.log(total);
    let fraction = total - Math.floor(total);
    
    if (fraction >= 0.5) {
        total = Math.ceil(total);
    } else {
        total = Math.floor(total);
    }
    return total;
}

console.log(sweatshirt(2));