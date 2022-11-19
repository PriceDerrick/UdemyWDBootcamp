let maxNumber = parseInt(prompt("Welcome! Enter your max number:"));

while (!maxNumber) {
    let maxNumber = parseInt(prompt("Welcome! Enter a valid number"));
}

console.log(maxNumber)



let rand = Math.floor((maxNumber * Math.random()+1));

console.log(rand)

let userGuess = prompt("What number did I pick?");

let i = 0
while (userGuess !== rand) 
{
  
    if (userGuess == rand) {
        ((i++)+2)
        break;
    }

    if (userGuess > rand){
        userGuess = prompt("Too High. Guess Again:");
        i++
    } 

    if (userGuess < rand) {
        userGuess = prompt("Too Low. Guess Again:");
        i++
    }

} 


console.log("Congrats!");
console.log(`It took you ${i} guesses!`);


