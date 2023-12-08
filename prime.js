function isPrime(x){
    let counter=0;
    for(let i=1; i<x/2; i++){
        if(x%i==0){
            counter++;
        }
    }
    if(counter>1){
        return false;
    } else{
        return true;
    }
}
function findPrime(min, max){
    let arr=[];
    let count=0;
    for(let i=min; i<=max; i++){
        if(isPrime(i)){
            arr[count]=i;
            count++;
        }
    }
    return arr;
}
let result=findPrime(0,10000000);
console.log(result);


