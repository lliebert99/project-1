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

//Req. 3c
let arrMax = arr => {
  let max = arr[0];
  arr.forEach(elem => {
    if (elem > max) {
      max = elem;
    }
  });
  return max;
};

// arrMax([2, 3, 5, 7, 9]) -> 9
// arrMax([6, 2, 4]) -> 6

//Req. 3d
let sumEvens = arr => {
  let sum = 0;

  for (var elem of arr) {
    if (elem % 2 == 0) {
      sum += elem;
    }
  }
  return sum;
};

// sumEvens([2, 4, 7, 9, 8]); -> 14

function alphaPosition(ch) {
  var numberFromLet = ch.charCodeAt(0);
  return numberFromLet;
}

//alphaPosition("a") -> 1
//alphaPosition("Z") -> 26
//alphaPosition("a"); -> 97
