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

const supra = {
  brand: "toyota",
  model: "supra mk4 twin turbo 2jz ",
  year: "1993-2002",
  color: "grey",
  showDescription: function () {
    return `${this.brand} ${this.model} ${this.year} ${this.color}`;
  },
};
function showSupra(ObjectName) {
  return `${ObjectName.brand} ${ObjectName.model} ${ObjectName.year} ${ObjectName.color}`;
}
console.log(supra.showDescription());

console.log(showSupra(supra));

const divisibleBy3 = [];
const divisibleBy5 = [];
const divisibleBy3And5 = [];
for (let i = 1; i <= 45; i++) {
  if (i % 3 === 0) {
    divisibleBy3.push(i);
  }
  if (i % 5 === 0) {
    divisibleBy5.push(i);
  }
  if (i % 3 === 0 && i % 5 === 0) {
    divisibleBy3And5.push(i);
  }
}

console.log(divisibleBy3);
console.log(divisibleBy5);
console.log(divisibleBy3And5);

const numbersArray = [1, 13, 22, 12, 49];
let sum = 0;
for (let i = 0; i < numbersArray.length; i++) {
  sum += numbersArray[i];
}
console.log(sum);

const array = [1, 2, 3, 4, 5];
for (i = array.length - 1; i > -1; i--) {
  console.log(array[i]);
}

const numb = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let avg = 0;
function calcavg(array) {
  avg = array / numb.length + avg;
}
for (let i = 0; i < numb.length; i++) {
  calcavg(numb[i]);
}
console.log(avg);

const arraySlice = function (array, startIndex, endIndex) {
  return array.slice(startIndex, endIndex);
};
const testArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arraySlice(testArray, 3, 5));

const numbers = [25, -5, -4, -3, -2, -1, 0, 69, -36, 9, 63, -12, 5];

const removeNegativeNumber = function (array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      array.splice(i, 1);
      i = i - 1;
    }
  }
  return array;
};
console.log(removeNegativeNumber(numbers));

const testArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = [];
testArray.forEach(function (element) {
  if (element > 0 && element % 2 === 0) {
    result.push(Math.sqrt(element));
  } else if (element > 0 && element % 2 !== 0) {
    result.push(element * 2);
  } else if (element < 0 && element % 2 === 0) {
    result.push(element ** 2);
  } else if (element < 0 && element % 2 !== 0) {
    result.push(Math.sin(element));
  }
});

console.log(result);

const sentence = "The quick brown fox jumps over the lazy dog";
let reversed = sentence.split("").reverse().join("");
console.log(reversed);
//
const recommendedMovies1 = [
  "Inception",
  "The Matrix",
  "Interstellar",
  "Memento",
];
const recommendedMovies2 = ["The Matrix", "Avatar", "Inception", "Titanic"];
const movieTitles = recommendedMovies1.concat(recommendedMovies2);
console.log(movieTitles);
let unicArray = [];
for (let i = 0; i < movieTitles.length; i++) {
  if (unicArray.indexOf(movieTitles[i]) === -1) {
    unicArray.push(movieTitles[i]);
  }
}
console.log(unicArray);
//
const inventory = ["mouse", "keyboard", "monitor", "laptop", "printer"];
const searchTerm = "shayan";

if (inventory.indexOf(searchTerm) === -1) {
  inventory.push(searchTerm);
} else {
  console.log("message");
}
const secondInventory = inventory.slice(0, 3).concat(inventory.slice(-2));
const result = secondInventory.join(";");
console.log(result);
//

const makeCapital = function (str) {
  return str[0].toUpperCase().concat(str.slice(1).toLowerCase());
};
console.log(makeCapital("stRing"));
console.log("gr".repeat(10));

const ages = [12, 5, 6, 23, -8];
ages.forEach(function (value, index) {
  ages[index] = value * 2;
});
console.log(ages);

const users = "cena shayan negin shiva maryam narges ali saeed hossein";
const result = users.split(" ").filter((value) => {
  return value.length >= 5;
});
console.log(result);

function sumNumbers(...numbers) {
  let result = 0;
  numbers.forEach((value) => {
    result += value;
  });
  console.log(result);
}
sumNumbers(1, 6, 8, 1, 7, 165);

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
const [players1, players2] = game.players;
const [gk, ...fieldPlayers] = players1;
const allPlayers = [...players1, ...players2];
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
const { team1: team1, x: draw, team2: team2 } = game.odds;
const printGoals = function (...input) {
  console.log(input.length);
};

//
let input = [
  "adel",
  "LION",
  "undEfind",
  63,
  "Hala madRid",
  "JENkINs",
  "DOCKER",
];
//expected output ["ADEL", "lion", "UNDEFIND", "HALA MADRID","JENKINS","docker"];

const result = [];
input.forEach((value) => {
  if (typeof value === "string" && value == value.toUpperCase()) {
    result.push(value.toLowerCase());
  } else if (typeof value === "string") {
    result.push(value.toUpperCase());
  }
});
console.log(result);


const numbers = [3, 4, 6, 1];

const maxValue = numbers.reduce((accumulator, currentValue) => {
  return Math.max(accumulator, currentValue);
}, numbers[0]);

console.log(maxValue);
////
const numbers = [3, 4, 6, 1];

const maxValue = numbers.reduce((accumulator, current) => {
  if (current > accumulator) {
    return current;
  } else {
    return accumulator;
  }
}, numbers[0]);

console.log(maxValue);

const number = [
  0, 3, 2, 9, 4, 15, 6, 21, 8, 27, 10, 33, 12, 39, 14, 45, 16, 51, 18, 57, 20,
  63, 22, 69, 24, 75, 26, 81, 28, 87, 30, 93, 32, 99, 34, 105, 36, 111, 38, 117,
  40, 123, 42, 129, 44, 135, 46, 141, 48, 147,
];
console.log(
  number.sort((a, b) => {
    if (a < b) {
      return -1;
    } else {
      return 1;
    }
  })
);

//
const string = "abcde";
function accum(s) {
  let result = [];
  let open = s.split("");
  open.forEach((value, index) => {
    result.push(value.toUpperCase() + value.toLowerCase().repeat(index));
  });
  return result.join("-");
}
console.log(accum(string));
*/

document.querySelector("#btn").addEventListener("click", function () {
  document.querySelector("#head").textContent =
    2024 - Number(document.querySelector("#ipt").value);
  document.querySelector("body").style.backgroundColor = "green";
  document.querySelector("#head").style.color = "white";
  document.querySelector("#head").style.fontSize = "2rem";
});
