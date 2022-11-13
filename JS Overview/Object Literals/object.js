// below is an example - Notice Key : Value

const fitBitData = {
    totalSteps  : 308727,
    totalMiles  : 211.7,
    avgCalorieBurn  : 5755,
    workoutsThisWeek    : '5 of 7',
    avgGoodSleep    : '2:13'
};



const person = {
    firstname: "Mick",
    lastName: "Jager"
};

console.log(person)

const kitchenSink = {
    favNum: 912312312,
    isFunny: true,
    colors: ['red', 'orange']
};

console.log(kitchenSink)

console.log(person.firstname)


const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
};


const fullAddress = restaurant.address + ", " + restaurant.city +",  " + restaurant.state + " " + restaurant.zipcode;


console.log(fullAddress)

const midterms = {
    dani: 96,
    thomas: 78,
};

console.log(midterms)

midterms.dani = "A";
midterms.thomas = "C+";

console.log(midterms)

midterms.ezra = "B+";

console.log(midterms)


const comments = [
    {username: "Tammy", text:"lolol", votes:9},
    {username: "Durk", text:"yo", votes:4000},
]

console.log(comments)

console.log(comments[1].text)