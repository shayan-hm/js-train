// class train 1
/*
let rectanglesLength = 10;
let rectanglesWidth = 5;
const rectanglesPerimeter =
  2 * Number(rectanglesLength) + 2 * Number(rectanglesWidth);
const rectanglesArea = Number(rectanglesLength) * Number(rectanglesWidth);
console.log(
  `rectangle Perimeter:${rectanglesPerimeter}    rectangle Area:${rectanglesArea}`
);
//////////////////
let circlesRadius = 9;
const circlesPerimeter = 2 * 3.14 * Number(circlesRadius);
const circlesArea = 3.14 * Number(circlesRadius) ** 2;
console.log(
  `circle Perimeter:${circlesPerimeter}    circle Area:${circlesArea}`
);
/////////////////
let trapezoidsFirstBase = 15;
let trapezoidsSecondBase = 10;
let trapezoidsHeight = 5;
let trapezoidsLength = 10;
let trapezoidsWidth = 5;
const trapezoidsArea =
  (Number(trapezoidsFirstBase) + Number(trapezoidsSecondBase)) *
  (Number(trapezoidsHeight) / 2);

const trapezoidsPerimeter =
  2 * Number(trapezoidsLength) + 2 * Number(trapezoidsWidth);
console.log(
  `trapezoid Perimeter:${trapezoidsPerimeter}    trapezoid Area:${trapezoidsArea}`
);
*/
// class train 2

/*
const number = 4;
const number2 = 3;

let result;
if (number === 0) {
  result = `This is 0 :)`;
} else if (number > 0) {
  result = `${number} is a positive number`;
} else {
  result = `${number} is a negative number`;
}

if (number === 0) {
  result = `This is 0 :)`;
} else if (number % 2 === 0) {
  result = `${number} is an odd number`;
} else {
  result = `${number} is an even number`;
}
if (number === number2) {
  result = `${number} is equal to ${number2}`;
} else if (number > number2) {
  result = `${number} is greater than ${number2}`;
} else {
  result = `${number2} is greater than ${number}`;
}
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


const day = "sunday";

switch (day) {
  case "monday":
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
const amount = 100;
let descount;
if (amount >= 100) {
  descount = 20;
} else if (amount < 100 && amount >= 50) {
  descount = 10;
} else {
  descount = 0;
}
console.log(descount);
const Name = "shayan";
const isGoodBehaved = true;
const billValue = 250;
let = result;
if (Name !== "adel" && isGoodBehaved && billValue > 200) {
  result = `Food is free for ${Name}`;
} else {
  result = `Food is not free for ${Name}`;
}
console.log(result);

class train 3 => trafic light
const trafficLightColor = "red";
if (trafficLightColor === red) {
  console.log(`stop`);
} else if (trafficLightColor === yellow) {
  console.log(`slow down`);
} else if (trafficLightColor === green) {
  console.log(`Go`);
} else {
  console.log(`ivalid color`);
}
class train 4 => age verification
const age = 18;
if (age >= 18) {
  console.log(`you are an adult`);
} else if (13 <= age < 18) {
  console.log(`you are a teenager`);
} else if (age < 13) {
  console.log(`you are a child`);
}
class train 5 => covert score
const score = 60;
let result;
if (100 >= score >= 90) {
  result = "A+";
} else if (89 >= score && score >= 80) {
  result = "A";
} else if (79 >= score && score >= 70) {
  result = "B+";
} else if (69 >= score && score >= 60) {
  result = "B";
} else if (59 >= score && score >= 50) {
  result = "C";
} else if (score < 50) {
  result = "D";
}
console.log(result);
class train 6 => BMI
const weight = 120;
const height = 2;
const bmi = weight / height ** 2;
let result;
if (bmi < 18.5) {
  result = `Underweight`;
} else if (18.5 <= bmi && bmi < 25) {
  result = `normal weight`;
} else if (25 <= bmi && bmi < 30) {
  result = `overweight`;
} else if (30 <= bmi) {
  result = `Obese`;
}
console.log(result);


// class train 6
function calculateDiscount(amount, discount) {
  return amount - amount * discount;
}
const finallAmount = calculateDiscount(200, 0.2);
console.log(finallAmount);
const calculateDiscount = function (amount, discount) {
  return amount - amount * discount;
};
console.log(calculateDiscount(100, 0.2));

const calculateDiscount = (amount, discount) => amount - amount * discount;
console.log(calculateDiscount(100, 0.2));

const users = [
  "shiva",
  "hossein",
  "sina",
  "ali",
  "nerges",
  "shayan",
  "negin",
  "saeed",
];
users.shift();
users.shift();
users.pop();
users.push(users.length);
console.log(users);

// class train 7
const calcAre = function (length, width) {
  return length * width;
};
console.log(calcAre(2, 3));

// class train 8
//  (1.8 × C) + 32
const celsiusToFahrenheit = function (celsius) {
  return 1.8 * celsius + 32;
};
console.log(celsiusToFahrenheit(110));

// class train 9
const testArray = ["value1", "value2", "value3", "value4"];
const testValue = "value";
const containsValue = function (Array, value) {
  if (Array.indexOf("value")) {
    return "yes";
  } else {
    return "no";
  }
};
console.log(containsValue(testArray, testValue));
*/
