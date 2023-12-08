// let id="a1l1"
// for(let i=2; i<6; i++){
//     let str=i.toString()
//     console.log(id[3]);
//     let newId=id.replace(id[3], str);
//     console.log(newId);
// }
function checkWord(lastId) {
    let str = lastId;
    let l5 = Number(str);
    let l1=l5-4;
    let l2=l5-3;
    let l3=l5-2;
    let l4=l5-1;
    let next=l5+1;
    let str1=l1.toString;
    console.log(str1);
    let oneL = checkFirstLetter(str1);
    let twoL = checkSecondLetter(l2.toString);
    let threeL = checkThirdLetter(l3.toString);
    let fourL = checkFourthLetter(l4.toString);
    let fiveL = checkFifthLetter(lastId);
    console.log(oneL);
    if (oneL && twoL && threeL && fourL && fiveL) {
      document.getElementById("correct").style.display = "block";
    } else {
      document.getElementById(next.toString).style.display = "block";
    }
}
