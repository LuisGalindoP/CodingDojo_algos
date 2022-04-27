const TwelveBarBlues = () => {
    let x = "chick";
    let y = "boom";
    for (let i = 1; i <= 12; i++ ) {
        console.log(i);
        console.log(x);
        console.log(y);
        console.log(x);
        [x, y] = [y, x];
    }
}

TwelveBarBlues();