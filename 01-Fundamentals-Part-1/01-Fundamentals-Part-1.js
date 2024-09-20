// Coding Challenge #1/#2
/*
// first data
// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;

//second data

const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

//BMI
const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;
const markHigherBMI = markBMI > johnBMI;
//result
console.log(markBMI, johnBMI, markHigherBMI);
let result;
if (markBMI > johnBMI) {
  result = `john is better`;
} else {
  result = `mark is better`;
}
console.log(result);
*/

//Coding Challenge #3
/*
const DolphinsFirstTime = 96;
const DolphinsSecondTime = 108;
const DolphinsThirdTime = 89;
const DolphinsAverage =
  (Number(DolphinsFirstTime) +
    Number(DolphinsSecondTime) +
    Number(DolphinsThirdTime)) /
  3;
//
const KoalasFirstTime = 88;
const KoalasSecondTime = 91;
const KoalasThirdTime = 110;
const KoalasAverage =
  (Number(KoalasFirstTime) +
    Number(KoalasSecondTime) +
    Number(KoalasThirdTime)) /
  3;
//

let winner;
if (DolphinsAverage > KoalasAverage) {
  winner = "Dolphin is winner";
} else if (KoalasAverage > DolphinsAverage) {
  winner = "Koalas is winner";
} else {
  winner = "we should draw";
} 

const DolphinsFirstTime = 97;
const DolphinsSecondTime = 112;
const DolphinsThirdTime = 101;
const DolphinsAverage =
  (Number(DolphinsFirstTime) +
    Number(DolphinsSecondTime) +
    Number(DolphinsThirdTime)) /
  3;
//
const KoalasFirstTime = 109;
const KoalasSecondTime = 95;
const KoalasThirdTime = 123;
const KoalasAverage =
  (Number(KoalasFirstTime) +
    Number(KoalasSecondTime) +
    Number(KoalasThirdTime)) /
  3;

//
let winner;
if (DolphinsAverage > KoalasAverage && DolphinsAverage >= 100) {
  winner = "Dolphin is winner";
} else if (KoalasAverage > DolphinsAverage && KoalasAverage >= 100) {
  winner = "Koalas is winner";
} else if (
  (KoalasAverage =
    DolphinsAverage && KoalasAverage >= 100 && DolphinsAverage >= 100)
) {
  winner = "we should draw";
}
console.log(winner);

const DolphinsFirstTime = 97;
const DolphinsSecondTime = 112;
const DolphinsThirdTime = 101;
const DolphinsAverage =
  (Number(DolphinsFirstTime) +
    Number(DolphinsSecondTime) +
    Number(DolphinsThirdTime)) /
  3;
//
const KoalasFirstTime = 109;
const KoalasSecondTime = 95;
const KoalasThirdTime = 106;
const KoalasAverage =
  (Number(KoalasFirstTime) +
    Number(KoalasSecondTime) +
    Number(KoalasThirdTime)) /
  3;

//
let winner;
if (DolphinsAverage > KoalasAverage && DolphinsAverage >= 100) {
  winner = "Dolphin is winner";
} else if (KoalasAverage > DolphinsAverage && KoalasAverage >= 100) {
  winner = "Koalas is winner";
} else if (KoalasAverage == DolphinsAverage && KoalasAverage >= 100) {
  winner = "we should draw";
} else {
  winner = "we don't have winner";
}
console.log(winner);
*/
// ////////////////// The switch Statement //////////////////
/*
const day = "sunday";

switch (day) {
  case "monday": // day === 'monday'
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
}
   
//
let result;
if (day === "monday") {
  result = "Plan course structure";
  result = "Go to coding meetup";
} else if (day === "tuesday") {
  result = "Prepare theory videos";
} else if (day === "thursday" || day === "wednesday") {
  result = "Write code examples";
} else if (day === "friday") {
  result = "Record videos";
} else if (day === "saturday" || day === "sunday") {
  result = "Enjoy the weekend :D";
} else {
  result = "Not a valid day!";
}
console.log(result);
 */
// Coding Challenge #4
/*
const billValue = 275;
// const billValue = 40;
// const billValue = 430;
const tip =
  billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
console.log(
  ` “The bill was : ${billValue} , the tip was : ${tip}, and the total value ${
    billValue + tip
  }`
);
*/
