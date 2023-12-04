let word = "worst";
function checkFirstLetter() {
  let letter = document.getElementById("letterFirst").value;
  if (letter == word[0]) {
    document.getElementById("letterFirst").style.backgroundColor = "#538d43";
    return 1;
  } else if (
    letter == word[1] ||
    letter == word[2] ||
    letter == word[3] ||
    letter == word[4]
  ) {
    document.getElementById("letterFirst").style.backgroundColor = "#b59f3b";
  } else {
    document.getElementById("letterFirst").style.backgroundColor = "#818384";
    return 0;
  }
}
function checkSecondLetter() {
  let letter = document.getElementById("letterSecond").value;
  if (letter == word[1]) {
    document.getElementById("letterSecond").style.backgroundColor = "#538d43";
    return 1;
  } else if (
    letter == word[0] ||
    letter == word[2] ||
    letter == word[3] ||
    letter == word[4]
  ) {
    document.getElementById("letterSecond").style.backgroundColor = "#b59f3b";
  } else {
    document.getElementById("letterSecond").style.backgroundColor = "#818384";
    return 0;
  }
}
function checkThirdLetter() {
  let letter = document.getElementById("letterThird").value;
  if (letter == word[2]) {
    document.getElementById("letterThird").style.backgroundColor = "#818384";
    return 1;
  } else if (
    letter == word[1] ||
    letter == word[0] ||
    letter == word[3] ||
    letter == word[4]
  ) {
    document.getElementById("letterThird").style.backgroundColor = "#b59f3b";
  } else {
    document.getElementById("letterThird").style.backgroundColor = "#818384";
    return 0;
  }
}
function checkFourthLetter() {
  let letter = document.getElementById("letterFourth").value;
  if (letter == word[3]) {
    document.getElementById("letterFourth").style.backgroundColor = "#538d43";
    return 1;
  } else if (
    letter == word[1] ||
    letter == word[2] ||
    letter == word[0] ||
    letter == word[4]
  ) {
    document.getElementById("letterFourth").style.backgroundColor = "#b59f3b";
  } else {
    document.getElementById("letterFourth").style.backgroundColor = "#818384";
    return 0;
  }
}
function checkFifthLetter() {
  let letter = document.getElementById("letterFifth").value;
  if (letter == word[4]) {
    document.getElementById("letterFifth").style.backgroundColor = "#538d43";
    return 1;
  } else if (
    letter == word[1] ||
    letter == word[2] ||
    letter == word[3] ||
    letter == word[0]
  ) {
    document.getElementById("letterFifth").style.backgroundColor = "#b59f3b";
  } else {
    document.getElementById("letterFifth").style.backgroundColor = "#818384";
    return 0;
  }
}
function checkWord() {
  checkFirstLetter();
  checkSecondLetter();
  checkThirdLetter();
  checkFourthLetter();
  checkFifthLetter();
  let firstLetter = document.getElementById("letterFifth").value;
  let secondLetter = document.getElementById("letterFifth").value;
  let thirdLetter = document.getElementById("letterFifth").value;
  let fourthLetter = document.getElementById("letterFifth").value;
  let fifthLetter = document.getElementById("letterFifth").value;
//   if((firstLetter && firstLetter.value) &&
//     (secondLetter && secondLetter.value) &&
//     (thirdLetter && thirdLetter.value) &&
//     (fourthLetter && fourthLetter.value) &&
//     (fifthLetter && fifthLetter.value)
//   ) {

//   }
}
function createAttempt(){
    let attempt=document.createElement("input");
    attempt.type="text";
    attempt.className="box";
    attempt.id="letterFirst"
    attempt.onchange=""
}
