let currentSelected = "1";
function randomWord() {
  let fiveLetterWords = [
    "apple",
    "chair",
    "table",
    "house",
    "light",
    "night",
    "knife",
    "queen",
    "quick",
    "juice",
    "lemon",
    "music",
    "ocean",
    "piano",
    "party",
    "earth",
    "beach",
    "cloud",
    "smile",
    "grape",
    "happy",
    "melon",
    "beard",
    "angel",
    "fancy",
    "happy",
    "lemon",
    "beard",
    "angel",
    "fancy",
    "lucky",
    "peace",
    "charm",
    "brown",
    "cream",
    "blank",
    "match",
    "chest",
    "wrist",
    "dream",
    "faith",
    "waste",
    "giant",
    "pilot",
    "robot",
    "happy",
    "smile",
    "candy",
    "beard",
    "peace",
    "sweet",
    "sleep",
    "magic",
    "light",
    "clean",
    "tiger",
    "child",
    "learn",
    "glass",
    "heart",
    "smile",
    "queen",
    "quick",
    "juice",
    "lemon",
    "music",
    "ocean",
    "piano",
    "party",
    "earth",
    "beach",
    "cloud",
    "happy",
    "melon",
    "beard",
    "angel",
    "fancy",
    "happy",
    "lemon",
    "beard",
    "angel",
    "fancy",
    "lucky",
    "peace",
    "charm",
    "brown",
    "cream",
    "blank",
    "match",
    "chest",
    "wrist",
    "dream",
    "faith",
    "waste",
    "giant",
    "pilot",
    "robot",
    "happy",
    "smile",
    "candy",
    "beard",
    "peace",
    "sweet",
    "sleep",
    "magic",
    "light",
    "clean",
    "tiger",
    "child",
    "learn",
    "glass",
    "heart",
  ];
  let random = Math.floor(Math.random() * 100);
  return fiveLetterWords[random];
}
let word = randomWord();
function checkFirstLetter(id) {
  letter = document.getElementById(id).value;
  if (letter == word[0]) {
    document.getElementById(id).style.backgroundColor = "#538d43";
    document.getElementById(id).style.border = "solid 1px #538d43";
    document.getElementById(letter).style.backgroundColor = "#538d43";
    return 1;
  } else if (
    letter == word[1] ||
    letter == word[2] ||
    letter == word[3] ||
    letter == word[4]
  ) {
    document.getElementById(id).style.backgroundColor = "#b59f3b";
    document.getElementById(id).style.border = "solid 1px #b59f3b";
    document.getElementById(letter).style.backgroundColor = "#b59f3b";
  } else {
    document.getElementById(id).style.backgroundColor = "#3A3A3C";
    document.getElementById(letter).style.backgroundColor = "#3A3A3C";
    return 0;
  }
}
function checkSecondLetter(id) {
  let letter = document.getElementById(id).value;
  if (letter == word[1]) {
    document.getElementById(id).style.backgroundColor = "#538d43";
    document.getElementById(id).style.border = "solid 1px #538d43";
    document.getElementById(letter).style.backgroundColor = "#538d43";
    return 1;
  } else if (
    letter == word[0] ||
    letter == word[2] ||
    letter == word[3] ||
    letter == word[4]
  ) {
    document.getElementById(id).style.backgroundColor = "#b59f3b";
    document.getElementById(id).style.border = "solid 1px #b59f3b";
    document.getElementById(letter).style.backgroundColor = "#b59f3b";
  } else {
    document.getElementById(id).style.backgroundColor = "#3A3A3C";
    document.getElementById(letter).style.backgroundColor = "#3A3A3C";
    return 0;
  }
}
function checkThirdLetter(id) {
  let letter = document.getElementById(id).value;
  if (letter == word[2]) {
    document.getElementById(id).style.backgroundColor = "#538d43";
    document.getElementById(id).style.border = "solid 1px #538d43";
    document.getElementById(letter).style.backgroundColor = "#538d43";
    return 1;
  } else if (
    letter == word[1] ||
    letter == word[0] ||
    letter == word[3] ||
    letter == word[4]
  ) {
    document.getElementById(id).style.backgroundColor = "#b59f3b";
    document.getElementById(id).style.border = "solid 1px #b59f3b";
    document.getElementById(letter).style.backgroundColor = "#b59f3b";
  } else {
    document.getElementById(id).style.backgroundColor = "#3A3A3C";
    document.getElementById(letter).style.backgroundColor = "#3A3A3C";
    return 0;
  }
}
function checkFourthLetter(id) {
  let letter = document.getElementById(id).value;
  if (letter == word[3]) {
    document.getElementById(id).style.backgroundColor = "#538d43";
    document.getElementById(id).style.border = "solid 1px #538d43";
    document.getElementById(letter).style.backgroundColor = "#538d43";
    return 1;
  } else if (
    letter == word[1] ||
    letter == word[2] ||
    letter == word[0] ||
    letter == word[4]
  ) {
    document.getElementById(id).style.backgroundColor = "#b59f3b";
    document.getElementById(id).style.border = "solid 1px #b59f3b";
    document.getElementById(letter).style.backgroundColor = "#b59f3b";
  } else {
    document.getElementById(id).style.backgroundColor = "#3A3A3C";
    document.getElementById(letter).style.backgroundColor = "#3A3A3C";
    return 0;
  }
}
function checkFifthLetter(id) {
  let letter = document.getElementById(id).value;
  if (letter == word[4]) {
    document.getElementById(id).style.backgroundColor = "#538d43";
    document.getElementById(id).style.backgroundColor = "#538d43";
    document.getElementById(letter).style.backgroundColor = "#538d43";
    return 1;
  } else if (
    letter == word[1] ||
    letter == word[2] ||
    letter == word[3] ||
    letter == word[0]
  ) {
    document.getElementById(id).style.backgroundColor = "#b59f3b";
    document.getElementById(id).style.border = "solid 1px #b59f3b";
    document.getElementById(letter).style.backgroundColor = "#b59f3b";
  } else {
    document.getElementById(id).style.backgroundColor = "#3A3A3C";
    document.getElementById(letter).style.backgroundColor = "#3A3A3C";
    return 0;
  }
}
function checkFirstWord() {
  let oneL = checkFirstLetter("1");
  let twoL = checkSecondLetter("2");
  let threeL = checkThirdLetter("3");
  let fourL = checkFourthLetter("4");
  let fiveL = checkFifthLetter("5");
  if (oneL && twoL && threeL && fourL && fiveL) {
    document.getElementById("correct").style.display = "block";
  } else {
    document.getElementById("6").style.display = "block";
  }
}
function checkSecondWord() {
  let oneL = checkFirstLetter("6");
  let twoL = checkSecondLetter("7");
  let threeL = checkThirdLetter("8");
  let fourL = checkFourthLetter("9");
  let fiveL = checkFifthLetter("10");
  if (oneL && twoL && threeL && fourL && fiveL) {
    document.getElementById("correct").style.display = "block";
  } else {
    document.getElementById("11").style.display = "block";
  }
}
function checkThirdWord() {
  let oneL = checkFirstLetter("11");
  let twoL = checkSecondLetter("12");
  let threeL = checkThirdLetter("13");
  let fourL = checkFourthLetter("14");
  let fiveL = checkFifthLetter("15");
  if (oneL && twoL && threeL && fourL && fiveL) {
    document.getElementById("correct").style.display = "block";
  } else {
    document.getElementById("16").style.display = "block";
  }
}
function checkFourthWord() {
  let oneL = checkFirstLetter("16");
  let twoL = checkSecondLetter("17");
  let threeL = checkThirdLetter("18");
  let fourL = checkFourthLetter("19");
  let fiveL = checkFifthLetter("20");
  if (oneL && twoL && threeL && fourL && fiveL) {
    document.getElementById("correct").style.display = "block";
  } else {
    document.getElementById("21").style.display = "block";
  }
}
function checkFifthWord() {
  let oneL = checkFirstLetter("21");
  let twoL = checkSecondLetter("22");
  let threeL = checkThirdLetter("23");
  let fourL = checkFourthLetter("24");
  let fiveL = checkFifthLetter("25");
  if (oneL && twoL && threeL && fourL && fiveL) {
    document.getElementById("correct").style.display = "block";
  } else {
    document.getElementById("26").style.display = "block";
  }
}
function checkSixthWord() {
  let oneL = checkFirstLetter("26");
  let twoL = checkSecondLetter("27");
  let threeL = checkThirdLetter("28");
  let fourL = checkFourthLetter("29");
  let fiveL = checkFifthLetter("30");
  if (oneL && twoL && threeL && fourL && fiveL) {
    document.getElementById("correct").style.display = "block";
  } else {
    document.getElementById("wrong").style.display = "block";
  }
}
function jump(id) {
  document.addEventListener("keyup", (event) => {
    let key = event.key;
    console.log(key);
    console.log(typeof key);
    let code = key.charCodeAt(0);
    if (code >= 97 && code <= 122) {
      document.getElementById(id).style.display = "block";
      document.getElementById(id).focus();
      currentSelected=id;
    } else if(key=="Backspace"){
        let curNum=Number(currentSelected)+-1;
        let curStr=curNum.toString();
        document.getElementById(curStr).focus();
        document.getElementById(curStr).innerHTML="";
    }
  });
}
function writeT(id) {
  document.getElementById(currentSelected).value =
    document.getElementById(id).innerHTML;
    currentNum=Number(currentSelected)+1;
  currentSelected =currentNum.toString();
  document.getElementById(currentSelected).style.display = "block";
  if(currentSelected==6){
    checkFirstWord();
  } else if(currentSelected==11){
    checkSecondWord();
  } else if(currentSelected==16){
    checkThirdWord();
  } else if(currentSelected==21){
    checkFourthWord();
  } else if(currentSelected==26){
    checkFifthWord();
  } else if(currentSelected>30){
    checkSixthWord();
  }
}
function focusOn(){
  document.getElementById("1").focus();
}
// function removeLetter(){
//   document.addEventListener("keydown", (event)=>{
//     let key=event.key;
//     if(key==){

//     }
//   });
// }