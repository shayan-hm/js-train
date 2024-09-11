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
*/
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
