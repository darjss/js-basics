//1
function printLess(a){
    let count=0;
    let arr=[];
    for(let i=a; i>0; i--){
            arr[count]=i;
            count++;
            console.log(count);
    }
    return arr;

}
let result=printLess(9);
console.log(result);
//2
function printBetween(min, max){
    let count=0;
    let arr=[];
    for(let i=min; i<max; i++){
        arr[count]=i;
        count++;
    }
    return arr;
}
let result2=printBetween(3,10);
console.log(result2);
// 3
function printBetweenIncrement(min, max, ){
    let count=0;
    let arr=[];
    for(let i=min; i<max; i++){
        arr[count]=i;
        count++;
    }
    return arr;
}