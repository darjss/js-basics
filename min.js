
function findMin(array){
    let min=a[0];
    for(let i=1; i<array.length; i++){
        if(min>array[i]){
            min=array[i];
        }
    }
    return min;
}
let a=[7, 5, 9, 11, 13, 15, 1];
let answer=findMin(a);
console.log(answer);