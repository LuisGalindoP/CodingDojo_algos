let myArray = [4,6,9,21];

const maxArray = (array) => {
    temp = 0;
    for (let i = 0; i < array.length; i++) {
        array[i] > temp ? temp = array[i] : null;
    }
    return temp;
}

console.log(maxArray(myArray));