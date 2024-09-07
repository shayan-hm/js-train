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
