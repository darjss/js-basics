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
