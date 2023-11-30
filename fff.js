function isPalindrome(x) {
  let rev = 0;
  let digit;
  let temp=x;
  while (!(temp == 0)) { //356 35
    digit = temp % 10; //6 5
    // rev = rev * 10 + digit; // 30
    temp =temp/ 10; //35 3
  }
  for(let i=0; i<8; i++)
  if (x == rev) {
    console.log(x,"is a palindrome");
  } else {
    console.log(x,"is not palindrome");
  }
  console.log(rev);
  console.log(digit);
  console.log(x);
}
isPalindrome(1221);
