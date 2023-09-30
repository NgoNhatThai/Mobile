//Coding challenge 1:
//mark :1 
//join :2

var mass1 = 78
var mass2 = 92
var height1 = 1.69
var height2 = 1.95

console.log("__________---Coding challenge 1---___________");

function getBMIs(mass, height) {
    return mass / (height * height)
}
console.log("The BMIs of Mark: " + getBMIs(mass1, height1));
console.log("The BMIs of Join: " + getBMIs(mass2, height2));

//create boolean variable
var markHigherBMI = Boolean(getBMIs(mass1, height1) > getBMIs(mass2, height2))
console.log("Mark's BMI is higher than Join's ?");
console.log(markHigherBMI)

//Coding challenge 2:
console.log("__________---Coding challenge 2---___________");
//Change data:
mass1 = 50
height1 = 1.8
mass2 = 100
height2 = 1.5

function compareBMIs(m1, h1, m2, h2) {
    if (getBMIs(m1, h1) > getBMIs(m2, h2)) {
        console.log("Mark's BMI is higher than Join's");
        console.log("Mark's BMI (" + getBMIs(m1, h1) + ") is higher than Join's (" + getBMIs(m2, h2) + ") !");
    }
    if (getBMIs(m1, h1) < getBMIs(m2, h2)) {
        console.log("Join's BMI is higher than Mark's");
        console.log("Join's BMI (" + getBMIs(m2, h2) + ") is higher than Mark's (" + getBMIs(m1, h1) + ") !");
    }
}
// Result
compareBMIs(mass1, height1, mass2, height2)
    // Coding challenge 3
console.log("");
console.log("__________---Coding challenge 3---___________");

const theDolphin = [96, 108, 89];
const theKoala = [88, 91, 110];

function getAverageScore(team) {
    let sum = 0;
    for (let i = 0; i < team.length; i++) {
        sum += team[i];
    }
    return sum / team.length;
}

const avgDolphin = getAverageScore(theDolphin);
const avgKoala = getAverageScore(theKoala);

console.log("The average score of Dolphin team is: " + avgDolphin);
console.log("The average score of Koala team is: " + avgKoala);

if (avgDolphin > avgKoala) {
    console.log("The Dolphin win !");
} else if (avgDolphin < avgKoala) {
    console.log("The Koala win !");
} else {
    console.log("The Draw !");
}
console.log("__________---Coding challenge 4---___________");
let bill1 = 275;
var tipPercentage = bill1 >= 50 && bill1 <= 300 ? 15 : 20;
var tip = (bill1 * tipPercentage) / 100;
var total = bill1 + tip;

console.log(`Hóa đơn là ${bill1}, số tiền tip là ${tip}, và tổng cộng là ${total}`);
let bill2 = 500;
var tipPercentage = bill2 >= 50 && bill2 <= 300 ? 15 : 20;
var tip = (bill2 * tipPercentage) / 100;
var total = bill2 + tip;

console.log(`Hóa đơn là ${bill2}, số tiền tip là ${tip}, và tổng cộng là ${total}`);

console.log("__________---Coding challenge 5---___________");

function calcAverage(scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum / scores.length;
}

// Kiểm tra đội nào thắng và in ra kết quả
function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`The Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`The Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log("No team wins!");
    }
}

var dolphinsScores = [44, 23, 71];
var koalasScores = [65, 54, 49];

var avgDolphins = calcAverage(dolphinsScores);
var avgKoalas = calcAverage(koalasScores);
console.log("Lượt thi đấu số 1:");
checkWinner(avgDolphins, avgKoalas);
console.log("Lượt thi đấu số 2:");
dolphinsScores = [85, 54, 41];
koalasScores = [23, 34, 27];
avgDolphins = calcAverage(dolphinsScores);
avgKoalas = calcAverage(koalasScores);
checkWinner(avgDolphins, avgKoalas);

console.log("__________---Coding challenge 6---___________");

function calcTip(bill) {
    const tipPercentage = bill >= 50 && bill <= 300 ? 15 : 20;
    return (bill * tipPercentage) / 100;
}
var bills = [125, 555, 44];
var tips = [];
var totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip);
}

console.log("Bills: " + bills);
console.log("Tips: " + tips);
console.log("Totals: " + totals);
console.log("__________---Coding challenge 7---___________");
// Tạo đối tượng Mark
var Mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
};

// Tạo đối tượng John
var John = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
};

// Tạo hàm tính chỉ số BMI
function calcBMI(person) {
    return person.mass / (person.height ** 2);
}

// Tạo hàm so sánh chỉ số BMI và in ra kết quả
function compareBMI(person1, person2) {
    const bmi1 = calcBMI(person1);
    const bmi2 = calcBMI(person2);

    if (bmi1 > bmi2) {
        console.log(`${person1.fullName} has a higher BMI than ${person2.fullName}.`);
    } else if (bmi1 < bmi2) {
        console.log(`${person2.fullName} has a higher BMI than ${person1.fullName}.`);
    } else {
        console.log(`${person1.fullName} and ${person2.fullName} have the same BMI.`);
    }
}

compareBMI(Mark, John);
console.log("__________---Coding challenge 8---___________");
bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
tips = [];
totals = [];

// Tính tiền tip và tổng cộng cho từng hóa đơn
for (let i = 0; i < bills.length; i++) {
    let tip = calcTip(bills[i]);
    let total = bills[i] + tip;
    tips.push(tip);
    totals.push(total);
}

console.log("Bills: " + bills);
console.log("Tips: " + tips);
console.log("Totals: " + totals);

//Bonus loop 4.0:
console.log("Bonus loop 4");

function calcAverage(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    let avg = sum / arr.length;

    return avg;
}

// Sử dụng hàm để tính trung bình của một mảng
const numbers = [10, 20, 30, 40, 50];
const average = calcAverage(numbers);

console.log("Trung bình của mảng là: " + average);
//Bonus loop 4.1:
console.log("Bonus loop 4.1");

function getSum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

// Sử dụng hàm để tính tổng của một mảng

const sum = getSum(numbers);

console.log("Tổng của mảng là: " + sum);
console.log("Bonus loop 4.2");

function calcAvgBySum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return avg = sum / arr.length;
}

// Sử dụng hàm để tính trung bình của một mảng
const average2 = calcAvgBySum(numbers);

console.log("Trung bình của mảng là: " + average2);
console.log("Bonus loop 4.3");
let result = calcAvgBySum(totals);
console.log("Trung bình của mảng Totals là: " + result);
console.log("__________---Coding challenge 9---___________");
data1 = [17, 21, 23]
data2 = [12, 5, -5, 0, 4]

function printForecast(arr) {
    for (let i = 0; i < arr.length; i++) {
        temperature = arr[i];
        day = i + 1;
        console.log(`${temperature} in ${day} days`)
    }
}
console.log(`Data 1:`)
printForecast(data1)

console.log(`Data 2:`)
printForecast(data2)