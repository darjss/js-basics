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
let num=16;
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