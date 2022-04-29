const sumToOne = (num) => {
    let array = Array.from(String(num), Number);
    console.log(array);

    let temp = 0;
    for (let i = 0; i < array.length; i++) {
        temp += array[i];
        console.log("FOR TEMP:", temp);
    }

    if (temp > 9) {
        let tempNumber = temp;
        sumToOne(tempNumber);
    } else {
        console.log("IF TEMP", temp);
        return temp;
    }
}

console.log(sumToOne(456));