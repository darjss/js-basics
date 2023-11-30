//salary ni 2 sayaas ih,
//niigmiin daatgaliin shimtgel toldog bh,
//passporttoi eswel identitycardtai bh,
//bas person bh eswel itgemjleheer bh,
// dept ni 1 sayas baga bwal zeel garna.
let person = {
  salary: 2500000,
  socialSecurity: true,
  passport: false,
  identityCard: false,

  inPerson: true,
  accreditedPerson: false,
  totalDebt: 300000,
};
if (
  person.salary > 2000000 &&
  person.socialSecurity &&
  person.totalDebt &&
  (person.inPerson || person.accreditedPerson) &&
  (person.passport || person.identityCard) &&
  person.totalDebt < 1000000
) {
  console.log("This person qualifies for a loan");
} else {
  console.log("This person is not eligible for a loan");
}
let weather = "rainy";
if (weather == "rainy" && weather == "snowy" && weather == "sunny") {
  console.log("take umbrella");
}
const isDivisble = (dividend, divisor) => {
  if (dividend % divisor == 0) {
    return 1;
  } else {
    return 0;
  }
};
let num=44;
firstDivisor=4;
secondDivisor=11;
let divisibleFirst=isDivisble(num,firstDivisor);
let divisibleSecond=isDivisble(num,secondDivisor);
if(divisibleFirst && divisibleSecond){
    console.log("divisible by both", firstDivisor, "and", secondDivisor)
} else if(divisibleFirst){
    console.log("divisible by", firstDivisor)
}  else if(divisibleSecond){
    console.log("divisible by", secondDivisor)
} else{
    console.log("not divisible by both ", divisibleFirst, "and", secondDivisor)
}
//password requirement checker
// const passwordChecker=(pass)=>{
//   if(pass.length>8 &&

//     ){
//     console.log("The ")
//   }
// }
function passwordlength(pass){
  if(pass.length>8){
    return 1;
  } else{
    return 0;
  }
}
function passwordNumber(pass){
  let count=0;
  for(let i=0; i<pass.length; i++){
    for(let a=0; a<=9; a++){
      if(pass[i]==a){
        count++;
      }
    }
  }
  if(count>3){
    return 1;
  } else return 0;
}
function passwordUpper(pass){
  let count=0;
  for(let i=0; i<pass.length;i++){
    for(let a=65; a<=90; a++){
      if(pass.charCodeAt(i)==a){
        count++;
      }
    }
  }
  console.log(count);
  if(count>0){
    return 1;
  } else return 0;
}
