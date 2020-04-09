// jshint esversion: 7

//Req. 3b
let arrAvg = arr => {
  let sum = 0;

  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let avg = sum / arr.length;
  return avg;
};

//arrAvg([6, 2, 4]) -> 4
//arrAvg([2, 3, 5, 7, 9]) -> 5.2
