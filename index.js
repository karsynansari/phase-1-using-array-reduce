const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// const totalBatteries = (previousValue, currentValue) =>
//   previousValue + currentValue;
// batteryBatches.reduce(totalBatteries, 0);
// Code your solution here
const totalBatteries = batteryBatches.reduce(function (
  previousValue,
  currentValue
) {
  return previousValue + currentValue;
},
0);

// const doubledAndSummed = [1, 2, 3].reduce(function (accumulator, element) {
//   return element * 2 + accumulator;
// }, 0);
