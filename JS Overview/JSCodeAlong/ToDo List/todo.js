
const toDoList = []

let userInput = prompt("What would you like to do?")


while (userInput !== "quit"){
if (userInput === "new") {
    newInput = prompt("Enter your new ToDo")
    toDoList.push(newInput)
    console.log(`${newInput} added to ToDo List`)
    userInput = prompt("What would you like to do?")
} else if (userInput === "list") {
    console.log("*************")
    for (let i = 0; i < toDoList.length; i++) {
        console.log(`${i}: ${toDoList[i]}`)
    }
    console.log("*************")
    userInput = prompt("What would you like to do?")
} else if (userInput === "delete"){
    dInput = parseInt(prompt("Please enter index number that you would like to delete."))
    dNotification= toDoList[dInput]
    toDoList.splice(dInput, 1)
    console.log(`deleted ${dNotification} from ToDo List`)
    userInput = prompt("What would you like to do?")
} else {
    userInput = prompt("What would you like to do? Please enter a valid response")
}
}
console.log("Ok, you quit the app")