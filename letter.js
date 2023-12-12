let sentence=`Lorem ipsum dolor sit amet, 
consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, 
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, 
sunt in culpa qui officia deserunt mollit anim id est laborum.`
function countLetter(a){
    let count=0
    let letter=String.fromCharCode(a);
    let bigLetter=String.fromCharCode(a-32)
    for(let i=0; i<sentence.length; i++){
        if(sentence[i]==letter || sentence[i]==bigLetter){
            count++;
        }
    }
    return count;
}
function allLetter(e){
    for(let i=97; i<123; i++){
        countof=countLetter(i);
        console.log(String.fromCharCode(i), ":", countof)
    }
}
// allLetter(sentence);
function seperateArray(data){
    let a=[];
    let pos=0;
    let count=0;
    for(let i=0; i<data.length; i++){
        if(data[i]=="\n"){
            a[count]=[];
            wordCount=0;
            wStart=0;
            for(let j=pos; j<i; j++){
                if(data[j]==" "){
                    for(let k=wStart; k<j; k++){
                        a[count][wordCount]="";
                        a[count][wordCount]+=data[k];
                        // console.log(wordCount);
                        console.log(wStart);
                        // console.log(k);
                    }
                    wStart=j+1;
                    wordCount++
                }
            }
            pos=i+1
            count++
        }
    }
    console.log(a);
}
seperateArray(sentence);
function seperateWord(words){
    let a=[];
    let pos=0
    let count=0;
    for(let i=0; i<words.length; i++){
        if(words[i]==" "){
            a[count]="";
            for(let j=pos; j<i; j++){
                a[count]+=words[j]
            }
            pos=i+1;
            count++
        }
    }
}
seperateWord(sentence);