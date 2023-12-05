let word = "focus";
function checkFirstLetter(id) {
  letter = document.getElementById(id).value;
  if (letter == word[0]) {
    document.getElementById(id).style.backgroundColor = "#538d43";
    return 1;
  } else if (
    letter == word[1] ||
    letter == word[2] ||
    letter == word[3] ||
    letter == word[4]
  ) {
    document.getElementById(id).style.backgroundColor = "#b59f3b";
  } else {
    document.getElementById(id).style.backgroundColor = "#818384";
    return 0;
  }
}
function checkSecondLetter(id) {
  let letter = document.getElementById(id).value;
  if (letter == word[1]) {
    document.getElementById(id).style.backgroundColor = "#538d43";
    return 1;
  } else if (
    letter == word[0] ||
    letter == word[2] ||
    letter == word[3] ||
    letter == word[4]
  ) {
    document.getElementById(id).style.backgroundColor = "#b59f3b";
  } else {
    document.getElementById(id).style.backgroundColor = "#818384";
    return 0;
  }
}
function checkThirdLetter(id) {
  let letter = document.getElementById(id).value;
  if (letter == word[2]) {
    document.getElementById(id).style.backgroundColor = "#538d43";
    return 1;
  } else if (
    letter == word[1] ||
    letter == word[0] ||
    letter == word[3] ||
    letter == word[4]
  ) {
    document.getElementById(id).style.backgroundColor = "#b59f3b";
  } else {
    document.getElementById(id).style.backgroundColor = "#818384";
    return 0;
  }
}
function checkFourthLetter(id) {
  let letter = document.getElementById(id).value;
  if (letter == word[3]) {
    document.getElementById(id).style.backgroundColor = "#538d43";
    return 1;
  } else if (
    letter == word[1] ||
    letter == word[2] ||
    letter == word[0] ||
    letter == word[4]
  ) {
    document.getElementById(id).style.backgroundColor = "#b59f3b";
  } else {
    document.getElementById(id).style.backgroundColor = "#818384";
    return 0;
  }
}
function checkFifthLetter(id) {
  let letter = document.getElementById(id).value;
  if (letter == word[4]) {
    document.getElementById(id).style.backgroundColor = "#538d43";
    return 1;
  } else if (
    letter == word[1] ||
    letter == word[2] ||
    letter == word[3] ||
    letter == word[0]
  ) {
    document.getElementById(id).style.backgroundColor = "#b59f3b";
  } else {
    document.getElementById(id).style.backgroundColor = "#818384";
    return 0;
  }
}
function checkFirstWord() {
  checkFirstLetter("a1l1");
  checkSecondLetter("a1l2");
  checkThirdLetter("a1l3");
  checkFourthLetter("a1l4");
  checkFifthLetter("a1l5");
  document.getElementById("a2l1").style.display="block";
  document.getElementById("a2l2").style.display="block";
  document.getElementById("a2l3").style.display="block";
  document.getElementById("a2l4").style.display="block";
  document.getElementById("a2l5").style.display="block";
}
function checkSecondWord() {
  checkFirstLetter("a2l1");
  checkSecondLetter("a2l2");
  checkThirdLetter("a2l3");
  checkFourthLetter("a2l4");
  checkFifthLetter("a2l5");
  document.getElementById("a3l1").style.display="block";
  document.getElementById("a3l2").style.display="block";
  document.getElementById("a3l3").style.display="block";
  document.getElementById("a3l4").style.display="block";
  document.getElementById("a3l5").style.display="block";
}
function checkThirdWord() {
  checkFirstLetter("a3l1");
  checkSecondLetter("a3l2");
  checkThirdLetter("a3l3");
  checkFourthLetter("a3l4");
  checkFifthLetter("a3l5");
  document.getElementById("a4l1").style.display="block";
  document.getElementById("a4l2").style.display="block";
  document.getElementById("a4l3").style.display="block";
  document.getElementById("a4l4").style.display="block";
  document.getElementById("a4l5").style.display="block";
}
function checkFourthWord() {
  checkFirstLetter("a4l1");
  checkSecondLetter("a4l2");
  checkThirdLetter("a4l3");
  checkFourthLetter("a4l4");
  checkFifthLetter("a4l5");
  document.getElementById("a5l1").style.display="block";
  document.getElementById("a5l2").style.display="block";
  document.getElementById("a5l3").style.display="block";
  document.getElementById("a5l4").style.display="block";
  document.getElementById("a5l5").style.display="block";
}
function checkFifthWord() {
  checkFirstLetter("a5l1");
  checkSecondLetter("a5l2");
  checkThirdLetter("a5l3");
  checkFourthLetter("a5l4");
  checkFifthLetter("a5l5");
  document.getElementById("a6l1").style.display="block";
  document.getElementById("a6l2").style.display="block";
  document.getElementById("a6l3").style.display="block";
  document.getElementById("a6l4").style.display="block";
  document.getElementById("a6l5").style.display="block";
}
function checkSixthWord() {
  checkFirstLetter("a6l1");
  checkSecondLetter("a6l2");
  checkThirdLetter("a6l3");
  checkFourthLetter("a6l4");
  checkFifthLetter("a6l5");
}