// const numbers = [1,2,3,4,5,6,7,8,9,10]

// function print(element){
//     console.log(element)
// }

// numbers.forEach(print)

// numbers.forEach(function(el){
//     if(el % 2 === 0){
//     console.log(el)
//     }
// })

// same as above

// for(let el of numbers){
//     console.log(el)
// }


const movies = [
    {
        title: "big booty",
        score: 85
    },
    {
        title: "your mom",
        score: 25
    },
    {
        title: "your dad",
        score: 35
    },
    {
        title: "your sister",
        score: 99
    },
    {
        title: "ayo",
        score: 48
    },
    
]

// movies.forEach(function(movie){
//     console.log(`${movie.title} - ${movie.score}/100`)
// })


// const titles = movies.map(function(movie){
//     return movie.title.toUpperCase()
// })


// const numbers = [1,2,3,4,5,6,7,8,9,10]

// const doubles = numbers.map(function(num){
//     return num*2;
// })




// const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

// const firstNames = fullNames.map(function(fName){
//     return fName.first;
// })

// console.log(firstNames)


// const add = (x,y) => {
//    return x+y;
// }

// const square = (x) => {
//     return x*x;
// }

// const rollDie = () => {
//     return Math.floor(Math.random()* 6+1);
// }

// const rollDie = () => (Math.floor(Math.random()* 6+1));



// const add = (a,b) => a+b

// const newMovies = movies.map(function(movie){
//    return `${movie.title} - ${movie.score}/100`
// })

const newMovies = movies.map(movie => `${movie.title} - ${movie.score}/100`)