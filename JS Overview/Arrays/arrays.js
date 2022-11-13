let colors = ["red","blue","green"]
console.log(colors[0])
console.log(colors[0][0])

colors[0] = "yellow"
console.log(colors[0])
console.log(colors[0][0])


colors[10] = "indigo"
console.log(colors)


// Push & Pop

// Push | add to end
let beatles = ["paul","john","george"]
beatles.push("ringo")

console.log(beatles)

beatles.push("your mom", "your dad")

// Pop | Remove from end
let yourDad = beatles.pop()
beatles.pop()
console.log(beatles)
console.log(yourDad)


// Shift and Unshift

let family = ["mom", "nick", "katy", "matt", "nolan", "levi"]
console.log(family)
let oldestFamily = family.shift()
console.log(oldestFamily)
console.log(family)
family.unshift(oldestFamily)
console.log(family)

// concat

const array1 = ['a','b','c']
const array2 = ['d','e','f']
console.log(array1.concat(array2))
let array3 = array1.concat(array2)
console.log(array3)

// includes
console.log(family.includes("mom"))

// indexOf
console.log(family.indexOf("nick"))

//reverse DESTRUCTIVE
console.log(family.reverse())
console.log(family)


//slice

console.log(family.slice(0,3))


//splice
family.splice(3, 0, 'Derrick')
console.log(family)


//updating nested array

const airplaneSeats = [
    ['Ruth', 'Anthony', 'Stevie'],
    ['Amelia', 'Pedro', 'Maya'],
    ['Xavier', 'Ananya', 'Luis'],
    ['Luke', null, 'Deniz'],
    ['Rin', 'Sakura', 'Francisco']
];
airplaneSeats[3].splice(1,1,'Hugo')
console.log(airplaneSeats)