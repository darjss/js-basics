// 1. Write a simple JavaScript program to join all elements of the following array into a string.Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :"Red,Green,White,Black""Red,Green,White,Black""Red+Green+White+Black"
// 2.  Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.3. 
// Write a JavaScript program to find the most frequent item in an array.Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )
// 4.Write a JavaScript program that accepts a string as input and swaps the case of each character. 
// For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
// 5.Write a JavaScript program that prints the elements of the following array.Note : Use nested for loops.
// Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// Sample Output :"row 0"" 1"" 2"" 1"" 24""row 1"-----------
// 6.  Write a JavaScript program to find the leap years in a given range of years.
// EX1
const arrToStr=(arr, sep)=>{
    // let str="";
    // arr.map((a)=>{
    //     str+=a+" ";
    // });
    // return str;
    return arr.join(sep);
}
let myColor = ["Red", "Green", "White", "Black"];
let result=arrToStr(myColor, " ");
console.log(result);
//EX2
const seperateStr=(str, sep)=>{
    let result="";
    for(let i=0; i<str.length; i++){
        Number(str[i])%2==0 && Number(str[i+1])%2==0 ? result+=str[i]+sep : result+=str[i];
    }
    return result;
}
const nums="025468";
const dashedNums=seperateStr(nums, "-")
console.log(dashedNums);
//EX3]
const mostFrequent=(arr)=>{
    let mostCount=0;
    let most=0;
    for(let i=0; i<arr.length; i++){
        let count=0;
        for(let j=i; j<arr.length; j++){
            if(arr[i]==arr[j]){
                count++;
            }
        }
        if(count>mostCount){
            mostCount=count; 
            most=arr[i];
        };
    }
    let result={
        element: most,
        count: mostCount
    }
    return result;
}
let arr=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let arrr=[2,3,4,5,6,2,7,7,7,7,2,9,10,2]
let answer=mostFrequent(arrr);
console.log(answer.element, answer.count);
//EX4
const changeCase=(str)=>{
    let newStr=""
    for(let i=0; i<str.length;i++){
        str[i]==str[i].toUpperCase()?
            newStr+=str[i].toLowerCase():
            newStr+=str[i].toUpperCase();
    }
    return newStr;
}
let sentence="The Quick Brown Fox Jumps Over The Fence";
let changedCase=changeCase(sentence);
console.log(changedCase);
//EX5
const printMultiArray=(arr)=>{
    for(let i=0; i<arr.length; i++){
        console.log("row", [i]);
        for(j=0; i<arr[i].length; j++){
            console.log(arr[i][j]);
        }
    }
}
var multArr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
printMultiArray(multArr);
//EX6
const findLeap=(min,max)=>{
    let count=0;
    for(let i=min; i<=max; i++){
        if(i%4==0 & !(i%100==0)){
            count++;
        }
    }
    return count;
}
let leapYears=findLeap(1100,1215);
console.log(leapYears);