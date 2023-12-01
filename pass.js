//add feature list:
// option to hide or see password
// autofills emails with popular email extensions
// shows dynamically met or not met password requirements like uppercase and number
// make it look nice with css
function passwordLength(pass) {
  if (pass.length > 8) {
    return 1;
  } else {
    return 0;
  }
}
function passCharCheck(pass, number, ascStart, ascEnd) {
  let count = 0;
  for (let i = 0; i < pass.length; i++) {
    for (let a = ascStart; a <= ascEnd; a++) {
      if (pass.charCodeAt(i) == a) {
        count++;
      }
    }
  }
  // console.log(count);
  if (count >= number) {
    return 1;
  } else return 0;
}
function emailChecker() {
    let message=document.getElementById("validEmail");
  let email = document.getElementById("email").value;
  if (email.includes("@") && email.includes(".com")) {
    // alert("this qualifies as a email");
    message.innerHTML="✅ this is a valid email"
  } else {
    // alert("please enter an valid email");
    message.innerHTML="❌ This is not an email"
  }
}
const passwordChecker = () => {
    let req=document.getElementById("passReq");
    let message=document.getElementById("validPass");
  let pass = document.getElementById("password").value;
  console.log(pass);
  let isLong = passwordLength(pass);
  let hasNumber = passCharCheck(pass, 3, 48, 57);
  let hasUpper = passCharCheck(pass, 1, 65, 90);
  let hasSpecial = passCharCheck(pass, 1, 33, 47);
  let hasChar = passCharCheck(pass, 1, 58, 64);
  if (isLong && hasNumber && hasUpper && (hasSpecial || hasChar)) {
    // alert("the password is strong enough");
    message.innerHTML="✅ the password is strong enough"
  }
     else if (!isLong ) {
        message.innerHTML="❌ This password is not strong"
      req.innerHTML="⛔️ The password is not long enough";
    } else if (!hasNumber) {
        message.innerHTML="❌ This password is not strong"
        req.innerHTML="⛔️ The password doesnt include number";
    } else if (!hasUpper) {
        message.innerHTML="❌ This password is not strong"
        req.innerHTML="⛔️ The password doesnt include an uppercase letter";
    } else if (!(hasSpecial || hasChar)) {
        message.innerHTML="❌ This password is not strong"
        req.innerHTML="⛔️ The password doesnt include a special character";
    } else return false;
};
//steps to implement hide password feature
// use do not display the input with id password
// use css position to show different p tag over the input box
// use function hidePassto add * everytime a key is pressed using keystroke event listener in the p tag
// call the function using onchange
function hidePass(){

}
// steps to autofill password
//on hover display a list of popular email suffixes
// on click use innerhtml to add the suffix to the input





// let hasNumber=passCharCheck("se1234", 3, 48, 57);
// if (isEmail) {
//   alert("this qualifies as a email");
// } else {
//   alert("please enter an valid email");
// }
// if (isPassStrong) {
//   alert("the password is strong enough");
// } else {
//   alert("the password is not strong enough");
// }
