var name = prompt("Please enter your name:");
console.log("Hello, " + name + "!");
var gender = prompt("Please enter your gender (male or female):");


if (gender !== "male" && gender !== "female") {
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
var skipWelcome = confirm("Do you want to skip the welcoming message?");

if (!skipWelcome) {
    switch (gender) {
        case "male":
            alert("Welcome, Mr. " + name + "!");
            break;
        case "female":
            alert("Welcome, Ms. " + name + "!");
            break;
            case "":
                alert("Welcome,  " + name + "!");
        default:
            break;
    }
    
}


function promptYesNoQuestion(question) {
    var answer = prompt(question);
    if (answer === "") {
      alert("Invalid answer!"); // Display an alert for empty input
      return "invalid";
    }
    return answer.toLowerCase();
  }
  
  function askQuestions() {
    var questions = [
      "Do you like JavaScript?",
      "Have you ever coded in Java?",
      "Do you enjoy debugging?"
    ];
    var answers = [];
  
    for (var i = 0; i < questions.length; i++) {
      var answer = promptYesNoQuestion(questions[i]);
      answers.push(answer);
    }
  
    return answers;
  }
  
  function printAnswers(answers) {
    console.log("Answers:");
    for (var i = 0; i < answers.length; i++) {
      console.log(answers[i]);
    }
  }
  
 
  var userAnswers = askQuestions();
  printAnswers(userAnswers);







