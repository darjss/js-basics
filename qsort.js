let intArray = [1, 9, 3, 8, 3, 6, 7, 8];
const quickSort = (arr, left, right) => {
  if (left < right) {
    pi = partition(arr, left, right);
    quickSort(arr, left, pi - 1);
    quickSort(arr, pi + 1, right);
  }
  return arr;
};
const partition = (arr, left, right) => {
  let p = getRandom(left, right);
  [arr[p], arr[right]] = [arr[right], arr[p]];
  temp = left;
  for (let i = left; i <= arr[p]; i++) {
    if (arr[i] < arr[right]) {
      [arr[i], arr[temp]] = [arr[temp], arr[i]];
      temp++;
    }
  }
  [arr[temp], arr[right]] = [arr[right], arr[temp]];
  return temp;
};
const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
let sorted = quickSort(intArray, 0, intArray.length - 1);
console.log(sorted);
