// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript
const testData = "hello world this is me";
const shortest = function (s) {
  const wordArray = s.split(" ");
  wordArray.sort((a, b) => a.length - b.length);
  return wordArray[0].length;
};

//https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript
const descendingOrder = function (n) {
  const stringNumber = n.toString();
  arrayNumber = stringNumber.split("");
  arrayNumber.sort((a, b) => {
    return b - a;
  });
  const result = arrayNumber.join("");
  return Number(result);
};

// https://www.codewars.com/kata/56f6ad906b88de513f000d96
function bonusTime(salary, bonus) {
  let result;
  if (bonus) {
    result = salary * 10;
  } else {
    result = salary;
  }
  return `\u00A3${result}`;
}

// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript
function abbrevName(name) {
  let result = [];
  result.push(name.split(" ")[0].split("")[0].toUpperCase());
  result.push(name.split(" ")[1].split("")[0].toUpperCase());
  return result.join(".");
}

// https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript
function points(games) {
  let result = 0;
  games.forEach((value, index, array) => {
    if (Number(value[0]) > Number(value[2])) {
      result += 3;
    } else if (Number(value[0]) === Number(value[2])) {
      result += 1;
    }
  });
  return result;
}

// https://www.codewars.com/kata/57e76bc428d6fbc2d500036d
https: function stringToArray(string) {
  return string.split(" ");
}

// https://www.codewars.com/kata/51c8991dee245d7ddf00000e
function reverseWords(str) {
  return str.split(" ").reverse().join("");
}
//https://www.codewars.com/kata/583203e6eb35d7980400002a/javascript
function countSmileys(arr) {
  const smileyRegex = /^[:;][-~]?[)D]$/;
  return arr.filter((face) => smileyRegex.test(face)).length;
}
// https://www.codewars.com/kata/514b92a657cdc65150000006/javascript
function solution(number) {
  let result = [];
  let sum = 0;
  if (number < 1) {
    return 0;
  } else {
    for (let i = 0; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        result.push(i);
      }
    }
    result.forEach((value) => {
      sum += value;
    });
    return sum;
  }
}
//
// https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript
function findMissingLetter(array) {
  const az = "abcdefghijklmnopqrstuvwxyz";
  const AZ = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const alphabet = az.split("");
  const Alphabet = AZ.split("");
  let result;

  for (let i = 0; i < array.length; i++) {
    if (
      array[i + 1] !== alphabet[alphabet.indexOf(array[i]) + 1] &&
      array[i].toLocaleLowerCase() === array[i]
    ) {
      result = alphabet[alphabet.indexOf(array[i]) + 1];
      break;
    } else if (
      array[i + 1] !== Alphabet[Alphabet.indexOf(array[i]) + 1] &&
      array[i].toUpperCase() === array[i]
    ) {
      result = Alphabet[Alphabet.indexOf(array[i]) + 1];
      break;
    }
  }
  return result;
}
//https://www.codewars.com/kata/525f4206b73515bffb000b21/train/javascript
function add(a, b) {
  result = Number(a) + Number(b);
  tstArray = result
    .toLocaleString("fullwide", {
      useGrouping: false,
    })
    .split("");
  // return result;
  return result.toPrecision(tstArray.length);
}
console.log(add("63829983432984289347293874", "90938498237058927340892374089"));
//////////////////////
function add(num1, num2) {
  // Initialize pointers for both numbers
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0;
  let result = [];

  while (i >= 0 || j >= 0 || carry) {
    // Get the current digits or 0 if we've run out of digits
    const digit1 = i >= 0 ? Number(num1[i]) : 0;
    const digit2 = j >= 0 ? Number(num2[j]) : 0;

    // Calculate the sum of the digits plus the carry
    const total = digit1 + digit2 + carry;

    // Update carry for the next iteration
    carry = Math.floor(total / 10);

    // Append the last digit of the total to the result
    result.push(total % 10);

    // Move to the next digits
    i--;
    j--;
  }

  // The result is in reverse order, so we reverse it before joining
  return result.reverse().join("");
}

// Example usages:
console.log(add("63829983432984289347293874", "90938498237058927340892374089")); // Output: "444"
