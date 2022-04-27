const amount = 89;

const changeMachine = (amount) => {
    const quarter = 25;
    const dime = 10;
    const nickel = 5;
    const cent = 1;

    let totalQuarters = 0;
    let totalDimes = 0;
    let totalNickels = 0;
    let totalCents = 0;

    let tempChange = amount;

    totalQuarters = Math.floor(tempChange / quarter);
    tempChange -= totalQuarters * quarter;
    console.log("QUARTERS", totalQuarters);
    console.log(tempChange);

    totalDimes = Math.floor(tempChange / dime);
    tempChange -= totalDimes * dime;
    console.log("DIMES", totalDimes);
    console.log(tempChange);

    totalNickels = Math.floor(tempChange / nickel);
    tempChange -= totalNickels * nickel;
    console.log("NICKELS", totalNickels);
    console.log(tempChange);
    
    totalCents = Math.floor(tempChange / cent);
    tempChange -= totalCents * cent;
    console.log("CENTS", totalCents);
    console.log(tempChange);
}

changeMachine(amount);