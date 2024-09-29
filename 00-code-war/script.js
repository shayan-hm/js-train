//Simple, given a string of words, return the length of the shortest word(s).

//String will never be empty and you do not need to account for different data types.
// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript
const testData = "hello world this is me";
const shortest = function (s) {
  const wordArray = s.split(" ");
  wordArray.sort((a, b) => a.length - b.length);
  return wordArray[0].length;
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Your task is to make a function that can take any non-negative integer as an argument and
//return it with its digits in descending order.
//Essentially, rearrange the digits to create the highest possible number.

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
console.log(descendingOrder(1523724848421));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]
//https://www.codewars.com/kata/583203e6eb35d7980400002a/javascript
