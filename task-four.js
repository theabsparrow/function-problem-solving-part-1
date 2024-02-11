function longestWord(word){
    const theWord = word.split(" ");
    
    let j = 0;
    let largestWord = ""
    for(let i = 0; i < theWord.length; i++){
        const value = theWord[i];
        const valueLength = value.length;
        if(valueLength > j){
            j = valueLength;
            largestWord = value;
        }
    }  
    return largestWord;   
}
const sentence = "i eat rice";
const result = longestWord(sentence);
console.log(result);      
    
   
