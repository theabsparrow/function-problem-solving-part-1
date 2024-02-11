function randomNumber(randomNum, addition){
        const randNumber = Math.random();
        const randNum = (randNumber * randomNum) + addition;
        const mathFloor = Math.floor(randNum);
        return mathFloor;
        
}
// const floorNum = math.floor(randNum); 

const addingNum = 10;
const number = 10;
const result = randomNumber(number, addingNum);
console.log(result);