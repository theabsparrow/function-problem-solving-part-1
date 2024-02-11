function isString(countLetter){
    let whitespace = countLetter.replace(/\s/g, "");
    let fullString = whitespace.split("");
    let j = 0
    for(let i = 0; i < fullString.length; i++){
        if (fullString[i] === "a" || fullString[i] === "e" || fullString[i] === "i" || fullString[i] === "o" || fullString[i] === "u"){
            j++
        }
    }
    return j;
}
const isLetter = "yeas i am"
const result = isString(isLetter);
console.log(result);