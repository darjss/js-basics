function isPalindrome(x) {
  let rev = 0;
  let digit;
  let temp=x;
  while (!(temp == 0)) {
    digit = temp % 10; //3
    rev = rev * 10 + digit; // 30
    temp /= 10;
  }
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
