const recursiveSigma = (num) => {
    let sum = 0;
    for (let i = 1; i <= Math.floor(num); i++){
        sum += i;
    }
    return sum;
}

console.log(recursiveSigma(10));