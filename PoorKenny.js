

const poorKenny = () => {
    
    let volcanosTotal = 0;
    let blizzardTotal = 0;
    let meteorTotal = 0;
    let earthquakeTotal = 0;
    let thunderTotal = 0;

    for (let i  = 0; i < 100; i++) {

        //Generate a random number between 1 and 100
        let random = Math.floor(Math.random() * 100) + 1;
        
        if (random <= 10) { volcanosTotal++ };
        if (random >= 11 && random <=30 ) { blizzardTotal++};
        if (random >= 31 && random <= 60) {meteorTotal++};
        if (random >= 61 && random <= 90) {earthquakeTotal++};
        if (random > 90) {thunderTotal++};
    }
    console.log("VOLCANOS: ", volcanosTotal);
    console.log("BLIZZARDS: ", blizzardTotal);
    console.log("METEORS: ", meteorTotal);
    console.log("EARTHQUAKE: ", earthquakeTotal);
    console.log("THUNDER: ", thunderTotal);
    return null;
}

console.log(poorKenny());