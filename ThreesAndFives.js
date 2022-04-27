const threesFives = (min, max) => {
    let sum = 0;
    for (let i = min; i <= max; i++ ) {
        if (i% 3 == 0 || i % 5 == 0) {
            if (i % 3 == 0 && i % 5 == 0) {
                null;
            } else {
                sum += i;
            }
        }
    }
    return sum;
}

console.log(threesFives(100, 4000000));

