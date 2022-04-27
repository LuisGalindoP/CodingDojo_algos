let arr = [4,3,6,7,1,3];
let x = 2;

const keepLastFew = (arr, x) => {
    let newArr = [];
    for (let i = arr.length - x; i < arr.length; i++ ) {
        newArr.push(arr[i]);
    }
    return newArr;
}

console.log(keepLastFew(arr, x));