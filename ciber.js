// Exercise 1
console.log("Hola mundo");

// Exercise 2
alert("My name is Donatella");

// Exercise 3
let name = "Donatella";
let surname = "C.";
console.log(name + " " + surname);

// Exercise 4
let number1 = 25;
let number2 = 65;
let total = 25 + 65;
console.log("The sum of " + number1 + " and " + number2 + " is " + total);

// Exercise 5
let nota_examen = 7;

if ( nota_examen <= 5.9){
alert ("I am sorry, with " + nota_examen + " you didn't pass!");
} else {
alert("Congratulations! You passed 🥇")
}

// Exercise 6
let string = "Tinc un cotxe de color blau."

//Replace color
let changeColor = string.replace("blau", "vert");
console.log(changeColor);

//Replace vowel
console.log(changeColor.replaceAll("o", "u"));


// Exercise 7
let objects = ["table", "chair", "computer", "notebook"]

for(i=0; i<objects.length; i++) {
    console.log("The object " + objects[i] + " is in position " + [i] + ".");
}


// Exercise 8

function calculator(operator, valor1, valor2) {
if (operator === "sum") {
    return valor1 + valor2;
} else if (operator === "division") {
    return valor1 / valor2; 
} else if (operator === "multiplication") {
    return valor1 * valor2;
} else {
    return "Sorry, option not available"
}
}

let result = calculator("division", 40, 20);
console.log("The result of the division is " + result);

