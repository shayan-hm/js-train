"use strict";
// Coding Challenge #1
/*
const calcAverage = (a, b, c) => (a + b + c) / 3;
const checkWinner = function (dolphinsAverage, koalasAverage) {
  if (dolphinsAverage > 2 * koalasAverage) {
    return `dolphins win`;
  } else if (dolphinsAverage * 2 < koalasAverage) {
    return `koalas win`;
  } else {
    return ` no winer`;
  }
};
console.log(checkWinner(calcAverage(44, 23, 71), calcAverage(65, 54, 49)));

// Coding Challenge #2
function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
}
const bills = [125, 555, 44];
const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tip);

const totalValue = [
  calcTip(bills[0]) + bills[0],
  calcTip(bills[1]) + bills[1],
  calcTip(bills[2]) + bills[2],
];
console.log(totalValue);

//Challenge
const shayan = {
  firstName: "shayan",
  lastName: "hamidy",
  friends: ["sourosh", "arian", "latif"],
  h,
};
console.log(
  `my name is ${shayan.firstName} ${shayan.lastName} and i have ${shayan.friends.length} friends and my best friend is ${shayan.friends[1]}`
);
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYeah: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,
  age: function () {
    return 2024 - this.birthYeah;
  },
  summery: function () {
    return `${this.firstName} is a ${this.age()} years old ${this.job} and he ${
      this.hasDriversLicense
        ? "has Drivers License"
        : "does not Drivers License"
    }`;
  },
};
console.log(jonas.summery());

// Coding Challenge #3

const mark = {
  firstName: "mark",
  weights: 78,
  tall: 1.69,
  calcBMI: function () {
    this.bmi = this.weights / this.tall ** 2;
    return this.bmi;
  },
};
const john = {
  firstName: "john",
  weights: 92,
  tall: 1.95,
  calcBMI: function () {
    this.bmi = this.weights / this.tall ** 2;
    return this.bmi;
  },
};

//Coding Challenge #4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
function calcTip(bills) {
  if (bills >= 50 && bills <= 300) {
    tips.push(bills * 0.15);
    totals.push(bills * 0.15 + bills);
  } else {
    tips.push(bills * 0.2);
    totals.push(bills * 0.2 + bills);
  }
}
for (let i = 0; i < bills.length; i++) {
  calcTip(bills[i]);
}
console.log(tips);
console.log(totals);
//Coding Challenge #5
const numb = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let avg = 0;
function calcavg(array) {
  avg = array / numb.length + avg;
}
for (let i = 0; i < numb.length; i++) {
  calcavg(numb[i]);
}
console.log(avg);
*/
