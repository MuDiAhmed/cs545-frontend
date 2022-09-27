import React from "react";
import { Chart } from "react-google-charts";
const b = 0;
const c = 0;
export const data = [
  ["x", "Customer", "Registered Property"],
  [0, 0, 0],
  [1, b, 5],
  [2, 70, 15],
  [3, b, 9],
  [4, 18, 10],
  [5, b, 5],
  [6, 11, 3],
  [7, 90, 19]
];

const numbers = [1,2,3,4,5,6,7]
const customer = [5,3,1,3,2,1,3];
const proper = [23,4,2,19,99,7,0];

const result = [[numbers[0], customer[0], proper[0]]];
console.log(` Data is ${result}`);


// for(let i= 0; i<8; i++){
//   for(let j =i+1; j<9; j++)
//   result[i][j] = j;
//   console.log(`Length of array is${result}`)
//   console.log(`value is: ${result[[0]]}`)
//   console.log(`value of second row: ${result[[]]}`)
// }

export const options = {
  hAxis: {
    title: "Monthly Time Slot",
  },
  vAxis: {
    title: "Popularity",
  },
  series: {
    1: { curveType: "function" },
  },
};

export default function AdminGraph() {
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="40%"
      data={data}
      options={options}
    />
  );
}
