// function grumpus() {
//     console.log("ugh you again");
//     console.log("for the last time");
//     console.log("Leave me alone");
// }



// grumpus();


// function singSong() {
//     console.log("Do");
//     console.log("Re");
//     console.log("MI");
// }

// singSong();

// function greet(firstName, lastName) {
//     console.log(`Hi, ${firstName} ${lastName[0]}.`);
// }


// greet("Derrick","Price")


// function repeat(word, times)
// { let result = "";
//     for (let i = 0; i < times; i++){
//         result += word;
//     }
//     console.log(result)
// }

// repeat("hi",3)



// function lastElement(array){
//     if (array.length > 0) {
//         return(array.slice((array.length-1)))
//     } else return(null)
// }

// function lastElement(array){
//     if (array.length > 0) {
//        let you = array.slice((array.length-1)).pop()
//         return(you)
//     } else return(null)
// }

// console.log(lastElement([1,2,3]))

// function capitalize(entry){
//     string = entry.toString()
//     firstLetter = string[0].toUpperCase()
//     removeFirstLetter = string.replace(string[0],"")
//     finalString = firstLetter.concat(removeFirstLetter)
//     return finalString
// }


// function capitalize(entry){
//     string = entry.toString()
//     finalString = string.replace(string[0], string[0].toUpperCase())
//     return finalString
// }



// console.log(capitalize("your mom"))



// function sumArray(numbers){
//     let total = 0;
//     for (let i = 0; i < numbers.length; i++){
//        total += numbers[i]
        
//     }
//     return total
// }


// sumArray([1,2,3])


// function returnDay(dayNumber) {
//     let dayOfWeek = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
//     let pDayNumber = parseInt(dayNumber);
//     if (pDayNumber <= 7 && pDayNumber >= 1){
//     return dayOfWeek.splice(pDayNumber-1,1).pop()
//     } else {
//         return null
//     }
// }







