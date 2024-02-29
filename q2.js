// for Loop
const obj = { a: 1, b: 2, c: 3 };
for (const prop in obj) {
    console.log(`obj.${prop} = ${obj[prop]}`);
}

// for of Loop

const numbers = [45, 4, 9, 16, 25];
for (const value of numbers) {
    console.log(`The number is ${value}`);
}

//for Each Loop
const fruits = ["apple", "orange", "cherry"];
fruits.forEach((fruit) => {
    console.log(fruit);
});

//for in Loop
const person = { fname: "John", lname: "Doe", age: 25 };
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}




