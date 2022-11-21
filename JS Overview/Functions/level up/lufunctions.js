// function collectEggs(){
//     let totalEggs = 6;
//     console.log(totalEggs);
// }

// collectEggs()



// let radius = 8;
// if (radius > 0){
//     const PI = 3.14159;
//     let msg = "HII";
// }

// console.log(radius);
// console.log(msg);

// function bankRobbery(){
//     const heroes = ["spiderman","wolverine"]
//     function cryForHelp() {
//         function inner() {
//             for (let hero of heroes){
//                 console.log(`Please help us, ${hero}`)
//             }
//         }
//         inner();
//     }
//     cryForHelp();
// }

// bankRobbery();


// const add = function(x,y){
//     return x+y;
// }

// console.log(add(3,4))




// console.log(square(4))

// function callTen(func){
//     func();
//     func();
//     func();
//     func();
//     func();
//     func();
//     func();
//     func();
//     func();
//     func();
// }


// function rollDie(){
//     const roll = Math.floor(Math.random()*6)+1
//     console.log(roll)
// }


// callTen(rollDie)



// function makeMysteryFunc() {
//     const rand = Math.random();
//     if (rand > 0.5){
//         return function() {
//             console.log("congrats, good func")
//             console.log("you win 1 mil")
//         }
//     } else {
//         return function(){
//             alert("you have virus")
//             alert("don't close this window")
//             alert("don't close this window")
//             alert("don't close this window")
//             alert("don't close this window")
//             alert("don't close this window")
//             alert("don't close this window")
//             alert("don't close this window")
//             alert("don't close this window")
//         }
//     }
// }



// function makeBetweenFunc(min, max) {
//     return function(num){
//         return num >= min && num <= max;
//     }
// }

// function isBetween(num){
//     return num >=50 && num <= 100
// }
// function isBetween2(num){
//     return num >=1 && num <= 10
// }


// let isChild = makeBetweenFunc(0,17);
// let isAdult = makeBetweenFunc(18,64);
// let isSenior = makeBetweenFunc(65,120);


// const myMath = {
//     PI: 3.14,
//     square(num){
//         return num*num;
//     },
//     cube: function(num){
//         return num**3;
//     }
// }


// const square = {
//     area(side){
//         return side*side;
//     },
//     perimeter(side){
//         return side*4;
//     }
// }


// const cat = {
//     name: "blue",
//     color: "grey",
//     breed: "cool",
//     meow(){
//         console.log(`${this.name} says MEOW MEOW MEOW`);
//     }
// }

//doesn't work
// const meow2 = cat.meow;





// const hen = {
//     name: "Helen",
//     eggCount: 0,
//     layAnEgg(){
//         this.eggCount = this.eggCount + 1
//         return "EGG"
//     }
// }




// try {
//     hello.toUpperCase();
// } catch {
//     console.log("error")
// }



// console.log("AYO")



// function yell(msg){
//     try {
//     console.log(msg.toUpperCase().repeat(3))
//     } catch (e) {
//         console.log(e);
//         console.log("please put in string")
//     }
// }
