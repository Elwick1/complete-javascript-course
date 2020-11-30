// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const x = 23;

// const calcAge = (birthYear) => 2020 - birthYear;

// console.log(calcAge(1992))

// PROBLEM 1:
// we work for a company building a smart home
// thermometer. Our most recent task is this;
// "Given an array of temperatures of one day,
// calculate the temperature amplitude.
// keep in mind that sometimes there might be a
// sensor error."

const temperatures = [3, -2, -6, -1, 'error',
9, 13, 17, 15, 14, 9, 5];

// 1) understanding the problem.
// - what is temperature amplitude? Answer the difference betweeen 
// the highest and lowest temperatures.
// - How do we compute this?
// - What is a sensor error and what do we do?


// 2) Breaking up into sub-problems.
// - How to ignore sensor errors?
// - Find max value in array
// - Find min value in array
// - Subtract min from max (Amplitude) and return it?

const calcTempAmplitude = function(temps) {
    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
        const currentTemp = temps[i];
        if (typeof currentTemp !== 'number') continue;

        if (currentTemp > max) max = currentTemp;
        if (currentTemp < min) min = currentTemp;
    }
    console.log(max, min);
    return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// function should now recieve 2 array's of temperatures

// 1 - with 2 arrays, should ww implement function twice?
// no - just merge arrays

// 2 - How to merge 2 arrays?






