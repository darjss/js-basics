function identifyNumber(roman){
    if(roman=="I"){
        return 1;
    } else if(roman=="V"){
        return 5;
    } else if(roman=="X"){
        return 10;
    } else if(roman=="L"){
        return 50;
    } else if(roman=="C"){
        return 100;
    } else if(roman=="D"){
        return 500;
    } else if(roman=="M"){
        return 1000;
    } else{
        return "Error Roman Number not Found"
    }
}
function calculateNumber(rom){
    temp=0;
    for(let i=0; i<rom.length; i++){
        temp=temp+identifyNumber(rom.slice(i, i+1));
    }
    console.log("Roman number", rom, "is", temp, "in decimal form");
}
calculateNumber("XVII");






test=identifyNumber("I");
console.log(test);
let test2="IVXLCDM"
let j=1;
console.log(test2.slice(j,j+1));