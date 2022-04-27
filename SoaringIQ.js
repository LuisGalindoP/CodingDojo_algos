let iqIncrease = 0.01;
let actualIq = 101;
let days = 2;

const iqCalculation = (iq, increase, days) => {
    let finalIq = iq;
    let increment = increase;

    for (let i = 0; i < days; i++) {
        finalIq += increment;
        increment += increment;
    }
    return finalIq;
}

console.log(iqCalculation(actualIq, iqIncrease, days));