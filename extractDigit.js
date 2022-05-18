const extractNumber = (num, digit) => {
    let result = (Math.floor(num) % digit*10);
    return result;
}

console.log(extractNumber(123, 2));