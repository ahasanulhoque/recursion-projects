//Fibonacci using iteration
const fibs = function returnFib(number) {
  let fibArr = [0];
  for (let i = 0; i < number; i++) {
    if (i == 1) {
      fibArr.push(1);
    } else if (i > 1) {
      fibArr.push(fibArr[i - 2] + fibArr[i - 1]);
    }
  }
  return fibArr;
};
// console.log(fibs(8));

//Fibonacci using recursive
const fibsRec = function returnFibRec(n) {
  if (n == 1) {
    return [0];
  } else if (n == 2) {
    return [0, 1];
  } else {
    return [].concat(
      fibsRec(n - 1),
      fibsRec(n - 1)[n - 3] + fibsRec(n - 1)[n - 2]
    );
  }
};

console.log(fibsRec(8));

const mergeSort = function recursiveMergeSort(arr) {
  let newArr = [];

  if (arr.length < 2) {
    return arr;
  } else {
    let firstHalf = mergeSort(arr.slice(0, arr.length / 2));
    let secondHalf = mergeSort(arr.slice(arr.length / 2));

    do {
      if (firstHalf[0] <= secondHalf[0]) {
        newArr.push(firstHalf.shift());
        if (firstHalf.length == 0) {
          secondHalf.forEach((element) => {
            newArr.push(element);
          });
        }
      } else {
        newArr.push(secondHalf.shift());
        if (secondHalf.length == 0) {
          firstHalf.forEach((element) => {
            newArr.push(element);
          });
        }
      }
    } while (firstHalf.length > 0 && secondHalf.length > 0);
  }
  return newArr;
};

console.log(mergeSort([3, 7, 6, 6, 4, 8, 7, 100, -1]));
