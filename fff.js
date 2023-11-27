let x=3443;
let z=0;
let y;
while(x>0){
    y=x%10; //3
    z=z*10+y; // 30
    x=x/10;
    Math.round(x)
}
if(x==z){
    console.log("palindrome");
}
else{
    console.log("not palindrome");
}
console.log(z);
console.log(y);
console.log(x);