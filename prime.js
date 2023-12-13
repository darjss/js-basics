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
function prime(x){
    let counter=0;
    for(let i=1; i<x/2; i++){
        if(x%i==0){
            counter++;
        }
    }
    if(counter>1){
        console.log(x,"is not a prime number");
    } else{
        console.log(x,"is a prime number");
    }
}
prime(17);
let a=[13, 35, 47, 39, 11];
a.map(prime);
a.map((a)=>{
    console.log(a);
})

