function duplicateZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {

      for (let j = arr.length + 1; j > i + 1; j--) {
        arr[j] = arr[j - 1];
      }
      arr[i + 1] = 0;
    }
  }
}
let a = [1, 3, 0, 5, 0, 7];
let result = duplicateZero(a);
console.log(result);
let intArray=[1,2, 3, 4, 5, 6,7,8]
console.log(intArray)
for (let i = 4; i >= 2; i--)
{
    intArray[i + 1] = intArray[i];
    console.log(intArray[i], i, intArray[i+1]);
}
intArray[2] = 30;
console.log(intArray);
