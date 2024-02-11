function numArray (array , number){
    let j = 0;
    for(let i = 0; i < array.length; i++){
        if (array[i] === number){
            j++
        }
    }
    return j;
}
const numberArray = [5,6,11,12,98, 5];
const number = 25;
const result = numArray(numberArray, number);
console.log(result);