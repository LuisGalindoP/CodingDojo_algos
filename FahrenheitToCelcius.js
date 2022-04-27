let far = 90;
let cel = 32;

const farToCel = (temp) => {
    return (temp - 32) * 5/9;;
};

const celToFar = (temp) => {
    return (9/5 * temp) + 32;
}


console.log(farToCel(far));
console.log(celToFar(cel));