function printPyramid(size){
    let sqr="";
    for(let i=0; i<size; i++){
        for(let j=0; j<size-i-1; j++){
                sqr+="-";
        }
        
    }
    console.log(sqr);
}
printPyramid(5);