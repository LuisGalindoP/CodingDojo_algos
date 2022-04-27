let number = 4;

const sigma = (num) => {
    let sum = 0;
    
    for (let i = num; i >= 0; i--) {
        sum += i;
    }
    return sum;
}

console.log(sigma(number));

//num = 5
//sum = 5
//i = 5