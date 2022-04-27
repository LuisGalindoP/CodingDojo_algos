let myArray = [5,5,8];

function FitFirstValue(arr) {
    let arrayLength = arr.length;
    if (arr[0] > arrayLength) {
        console.log("Too big!")
    } else if (arr[0] < arrayLength) {
        console.log("Too small!");
    } else {
        
        console.log("Just right");
    }
}

FitFirstValue(myArray);