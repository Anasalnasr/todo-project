var name = prompt("Please enter your name:");
console.log("Hello, " + name + "!");
var gender = prompt("Please enter your gender (male or female):");

while (gender !== "male" && gender !== "female") {
    gender = prompt("Invalid input. Please enter your gender as either 'male' or 'female':");
}

console.log("Your gender is: " + gender);

var age = parseInt(prompt("Please enter your age:"));

if (age <= 0) {
    alert("Invalid input. Age must be greater than zero.");
} else {
    // Continue with further operations if the age is valid
    console.log("Your age is: " + age);
}
