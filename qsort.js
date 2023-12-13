
let intArray=[1,9, 3, 8, 3, 6,7,8];
const quickSort=(arr, left, right)=>{
  if(left<right){
    pi=partition(arr, left, right);
    quickSort(arr, left, pi-1);
    quickSort(arr, pi+1, right);
  }
}
const partition=(arr, left, right)=>{
  let p=getRandom(left, right);
  swap(p, right);
  temp=left;
  for(let i=left; left<right-1; i++){
    if(arr[i]<arr[right]){
      swap(arr[i], arr[temp]);
      temp++
    }
  }
  swap(arr[temp], arr[right]);
  return temp;
}
const swap=(a, b)=>{
  let temp=a;
  a=b;
  b=temp;
}
const getRandom=(min, max)=>{
  return Math.random()*(max-min+1)+min
}