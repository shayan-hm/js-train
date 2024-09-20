const dataOne = [17, 21, 23];
const dataTwo = [12, 5, -5, 0, 4];
show = "";

const printForecast = function (array) {
  for (let i = 0; i < array.length; i++) {
    show = show + `${array[i]} in ${i + 1} day `;
  }
};
printForecast(dataTwo);
console.log(show);
