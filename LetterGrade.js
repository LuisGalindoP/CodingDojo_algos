
let grades = [
    {
        name: "Luis",
        grade: 90,
    },
    {
        name: "Jorge",
        grade: 60,
    },
    {
        name: "Nancy",
        grade: 75,
    }
];

const grade = (grades) => {
    let result = "";
    for (let i = 0; i < grades.length; i++) {
        if (grades[i].grade >= 90) {
            console.log(grades[i].name, "A");
        }else if (grades[i].grade >= 80) {
            console.log(grades[i].name, "B");
        }else if (grades[i].grade >= 70) {
            console.log(grades[i].name, "C");
        }else if (grades[i].grade >= 60) {
            console.log(grades[i].name, "D");
        }else {
            console.log(grades[i].name, "FAILED");
        }
    }
    return null;
}

grade(grades);