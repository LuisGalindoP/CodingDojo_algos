const sumToOne = (num) => {
    let result = 0;
    let temp = 0;
    //convert the num to an array
    let array = Array.from(String(num), Number);
    console.log(array);

    //go through the array and add each array element and save it in the temp var
    for (let i = 0; i < array.length; i++) {
        temp += array[i];
        console.log("FOR TEMP:", temp);
    }
    //now that we have the total sum of the array elements
    //we check if the temp is more than 9 (more than 1 digit)
    //if is true we send that number back to the function in a new variable
    //if is false we return the temp with 1 digit
    if (temp > 9) {
        let tempNumber = temp;
        sumToOne(tempNumber);
    } else {
        console.log("IF TEMP", temp);
        result = temp;
    }
    return result;
}

console.log(sumToOne(456));