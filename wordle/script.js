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
    "heart"
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
    return 1;
  } else if (
    letter == word[1] ||
    letter == word[2] ||
    letter == word[3] ||
    letter == word[4]
  ) {
    document.getElementById(id).style.backgroundColor = "#b59f3b";
    document.getElementById(id).style.border = "solid 1px #538d43";
  } else {
    document.getElementById(id).style.backgroundColor = "#818384";
    return 0;
  }
}
function checkSecondLetter(id) {
  let letter = document.getElementById(id).value;
  if (letter == word[1]) {
    document.getElementById(id).style.backgroundColor = "#538d43";
    document.getElementById(id).style.border = "solid 1px #538d43";
    return 1;
  } else if (
    letter == word[0] ||
    letter == word[2] ||
    letter == word[3] ||
    letter == word[4]
  ) {
    document.getElementById(id).style.backgroundColor = "#b59f3b";
    document.getElementById(id).style.border = "solid 1px #b59f3b";
  } else {
    document.getElementById(id).style.backgroundColor = "#818384";
    return 0;
  }
}
function checkThirdLetter(id) {
  let letter = document.getElementById(id).value;
  if (letter == word[2]) {
    document.getElementById(id).style.backgroundColor = "#538d43";
    document.getElementById(id).style.border = "solid 1px #538d43";
    return 1;
  } else if (
    letter == word[1] ||
    letter == word[0] ||
    letter == word[3] ||
    letter == word[4]
  ) {
    document.getElementById(id).style.backgroundColor = "#b59f3b";
    document.getElementById(id).style.border = "solid 1px #b59f3b";
  } else {
    document.getElementById(id).style.backgroundColor = "#818384";
    return 0;
  }
}
function checkFourthLetter(id) {
  let letter = document.getElementById(id).value;
  if (letter == word[3]) {
    document.getElementById(id).style.backgroundColor = "#538d43";
    document.getElementById(id).style.border = "solid 1px #538d43";
    return 1;
  } else if (
    letter == word[1] ||
    letter == word[2] ||
    letter == word[0] ||
    letter == word[4]
  ) {
    document.getElementById(id).style.backgroundColor = "#b59f3b";
    document.getElementById(id).style.border = "solid 1px #b59f3b";
  } else {
    document.getElementById(id).style.backgroundColor = "#818384";
    return 0;
  }
}
function checkFifthLetter(id) {
  let letter = document.getElementById(id).value;
  if (letter == word[4]) {
    document.getElementById(id).style.backgroundColor = "#538d43";
    document.getElementById(id).style.backgroundColor = "#538d43";
    return 1;
  } else if (
    letter == word[1] ||
    letter == word[2] ||
    letter == word[3] ||
    letter == word[0]
  ) {
    document.getElementById(id).style.backgroundColor = "#b59f3b";
    document.getElementById(id).style.border = "solid 1px #b59f3b";
  } else {
    document.getElementById(id).style.backgroundColor = "#818384";
    return 0;
  }
}
function checkFirstWord() {
  let oneL = checkFirstLetter("a1l1");
  let twoL = checkSecondLetter("a1l2");
  let threeL = checkThirdLetter("a1l3");
  let fourL = checkFourthLetter("a1l4");
  let fiveL = checkFifthLetter("a1l5");
  if (oneL && twoL && threeL && fourL && fiveL) {
    document.getElementById("correct").style.display = "block";
  } else {
    document.getElementById("a2l1").style.display = "block";
    document.getElementById("a2l2").style.display = "block";
    document.getElementById("a2l3").style.display = "block";
    document.getElementById("a2l4").style.display = "block";
    document.getElementById("a2l5").style.display = "block";
  }
}
function checkSecondWord() {
  let oneL = checkFirstLetter("a2l1");
  let twoL = checkSecondLetter("a2l2");
  let threeL = checkThirdLetter("a2l3");
  let fourL = checkFourthLetter("a2l4");
  let fiveL = checkFifthLetter("a2l5");
  if (oneL && twoL && threeL && fourL && fiveL) {
    document.getElementById("correct").style.display = "block";
  } else {
    document.getElementById("a3l1").style.display = "block";
    document.getElementById("a3l2").style.display = "block";
    document.getElementById("a3l3").style.display = "block";
    document.getElementById("a3l4").style.display = "block";
    document.getElementById("a3l5").style.display = "block";
  }
}
function checkThirdWord() {
  let oneL = checkFirstLetter("a3l1");
  let twoL = checkSecondLetter("a3l2");
  let threeL = checkThirdLetter("a3l3");
  let fourL = checkFourthLetter("a3l4");
  let fiveL = checkFifthLetter("a3l5");
  if (oneL && twoL && threeL && fourL && fiveL) {
    document.getElementById("correct").style.display = "block";
  } else {
    document.getElementById("a4l1").style.display = "block";
    document.getElementById("a4l2").style.display = "block";
    document.getElementById("a4l3").style.display = "block";
    document.getElementById("a4l4").style.display = "block";
    document.getElementById("a4l5").style.display = "block";
  }
}
function checkFourthWord() {
  let oneL = checkFirstLetter("a4l1");
  let twoL = checkSecondLetter("a4l2");
  let threeL = checkThirdLetter("a4l3");
  let fourL = checkFourthLetter("a4l4");
  let fiveL = checkFifthLetter("a4l5");
  if (oneL && twoL && threeL && fourL && fiveL) {
    document.getElementById("correct").style.display = "block";
  } else {
    document.getElementById("a5l1").style.display = "block";
    document.getElementById("a5l2").style.display = "block";
    document.getElementById("a5l3").style.display = "block";
    document.getElementById("a5l4").style.display = "block";
    document.getElementById("a5l5").style.display = "block";
  }
}
function checkFifthWord() {
  let oneL = checkFirstLetter("a5l1");
  let twoL = checkSecondLetter("a5l2");
  let threeL = checkThirdLetter("a5l3");
  let fourL = checkFourthLetter("a5l4");
  let fiveL = checkFifthLetter("a5l5");
  if (oneL && twoL && threeL && fourL && fiveL) {
    document.getElementById("correct").style.display = "block";
  } else {
    document.getElementById("a6l1").style.display = "block";
    document.getElementById("a6l2").style.display = "block";
    document.getElementById("a6l3").style.display = "block";
    document.getElementById("a6l4").style.display = "block";
    document.getElementById("a6l5").style.display = "block";
  }
}
function checkSixthWord() {
  let oneL = checkFirstLetter("a6l1");
  let twoL = checkSecondLetter("a6l2");
  let threeL = checkThirdLetter("a6l3");
  let fourL = checkFourthLetter("a6l4");
  let fiveL = checkFifthLetter("a6l5");
  if (oneL && twoL && threeL && fourL && fiveL) {
    document.getElementById("correct").style.display = "block";
  } else {
    document.getElementById("wrong").style.display = "block";
  }
}
