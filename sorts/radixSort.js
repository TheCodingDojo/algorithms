// http://algorithms.dojo.news/static/Algorithms/index.html#LinkTarget_2129

// src=https://reactgo.com/radix-sort-algorithm-javascript/

// setup
function getPosition(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

// get num with most digits
function getMax(arr) {
  let max = 0;
  for (let num of arr) {
    if (max < num.toString().length) {
      max = num.toString().length;
    }
  }
  return max;
}

// setup
function radixSort(arr) {
  const max = getMax(arr); // length of the max digit in the array

  for (let i = 0; i < max; i++) {
    let buckets = Array.from({ length: 10 }, () => []);
  }
  return arr;
}

function radixSort(arr) {
  const max = getMax(arr); // length of the max digit in the array

  for (let i = 0; i < max; i++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      buckets[getPosition(arr[j], i)].push(arr[j]); // pushing into buckets
    }
    arr = [].concat(...buckets);
  }
  return arr;
}

console.log(radixSort([4, 57, 7, 3, 933])); // [3,4,7,57,933]
