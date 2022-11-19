//FOR LOOOOOOOOPS

// for (let i = 1; i<=10; i++) {
//     console.log(i);
// }

// for (let i = 1; i <= 21; i+=2 ){
//     console.log(i)
// }

// for (let i = 100; i >= 0; i-= 10 ){
//     console.log(i)
// }


// const family = ["mom", "nick", "katy", "matt", "nolan", "levi"]

// for (let i=0; i < family.length; i++) {
//     console.log(i, family[i])
// }


// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// // WRITE YOUR LOOP BELOW THIS LINE:

// for (let i = 0; i < people.length; i++) {
//     console.log(people[i].toUpperCase())
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`i is ${i}`)
//     for (let j = 1; j<4; j++){
//         console.log(`         j is ${j}`)
//     }
// }


// const seatingChart = [
//     ['Derrick','Matt','Nathan'],
//     ['Postma','Mason','Zack','Stone'],
//     ['Jeremiah','Cody','Gary','Savannah']
// ]

// for (let i = 0; i < seatingChart.length; i++){
//     const row = seatingChart[i];
//     console.log(`ROW ${i+1}`)

//     for (let j = 0; j < row.length; j++){
//         console.log(row[j])
//     }
// }


//WHILE LOOOOOOOOPS

// let i = 0;
// while (i < 10) {
//     console.log(i)
//     i++;
// }



// const SECRET = "BabyHippo";

// let guess = prompt("ENTER CODE");
// while (guess !== SECRET) {
//     guess = prompt("ENTER CODE");
// }
// console.log("YOU GOT IT")


// For Of Loop

// const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics']

// for (let sub of subreddits){
//     console.log(`Visit r/${sub}`)
// }

// For of nested

// const seatingChart = [
//     ['Derrick','Matt','Nathan'],
//     ['Postma','Mason','Zack','Stone'],
//     ['Jeremiah','Cody','Gary','Savannah']
// ]

// let i = 0
// for (let row of seatingChart) {
//     console.log(`row ${i+1}`)
//     i++
//     for(let student of row){
//         console.log(student)
//     }
// }


//for of string

// for (let char of "hello world") {
//     console.log(char)
// }


// objects

const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60
}

for (let person in testScores) {
    console.log(person);
}

for (let person in testScores) {
    console.log(`${person} scored ${testScores[person]}`);
}

let total = 0;
for (let person of Object.values(testScores)){
    total += person;
}
console.log(total)


let totalTwo = 0;
let scores = Object.values(testScores);
for (let score of scores){
    totalTwo += score;
}
console.log(totalTwo / scores.length)