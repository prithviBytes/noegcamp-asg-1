//importing packages
const readlineSync = require("readline-sync");
const chalk = require('chalk');
const sleep = require('sleep');

//variable with the current highScorer information
var highScorer = {
  name:"Prithvi",
  points : 7
}

//Welcome message
console.log(chalk.inverse("******WELCOME TO THE GAME OF THRONE QUIZ******"));
console.log("There will be 10 questions.\nCorrect answer will give you 1 point \nand a wrong answer accounts to -0.5 points.");
console.log(chalk.bgCyan("Current HighScore : "+highScorer.name+" with "+highScorer.points+" points."))

//getting the username
var username = readlineSync.question("What is your name? \n");

while(username == ""){
  console.log("Please enter a valid name");
  username = readlineSync.question("What is your name? \n");
}
console.log("Welcome "+chalk.cyan(username)+" !!!");

//setting the initial score to ZERO
var score = 0;

//Quiz Questions
const question = [
  {
    q:"Who is the writer of GOT ?",
    o: [
      "Vera Brittain",
      "George R. R. Martin",
      "John Steinbeck",
      "F. Scott Fitzgerald"
    ],
    a:"b"
  },
   {
    q:"How did Daenerys Targaryen eventually hatch her dragon eggs?",
    o: [
      "In a lightning storm",
      "In a funeral pyre",
      "In a fireplace",
      "In a frozen cave"
    ],
    a:"b"
  },
    {
    q:"American actor Peter Dinklage, who plays Tyrion Lannister, also had a starring role in this fantasy franchise:",
    o: [
      "Lord of the Rings",
      "Highlander",
      "The Chronicles of Narnia",
      "The Legend of Zelda"
    ],
    a:"c"
  },
    {
    q:"Who was responsible for the creation of the Night King?",
    o: [
      "The Lord of Light",
      "The Children of the Forest",
      "The Drowned God",
      "The First Men  "
    ],
    a:"b"
  },
    {
    q:"In the TV show, what was Hodor called before he got his tragic door-holding nickname?",
    o: [
      "Wylis",
      "Horys",
      "Myrys",
      "Gladys"
    ],
    a:"a"
  },
    {
    q:"What is the only thing that can put out volatile Wildfire?",
    o: [
      "Sand",
      "Water",
      "Dragon's blood",
      "Sunlight"
    ],
    a:"a"
  },
    {
    q:"Iwan Rheon, who played Ramsay Bolton, was almost cast as which character?",
    o: [
      "Gendry",
      "Podrick Payne",
      "Jon Snow ",
      "Robb Stark"
    ],
    a:"c"
  },
    {
    q:"In which King’s Landing slum did Gendry grow up?",
    o: [
      "Rat Bottom",
      "Dragonpit",
      "Rhaenys’s Hill",
      "Flea Bottom"
    ],
    a:"d"
  },
    {
    q:"How many kings and queens of Westeros did Lord Varys serve?",
    o: [
      "2",
      "3",
      "4",
      "5"
    ],
    a:"c"
  },
    {
    q:"Who was the leader of the Golden Company sellswords when Dany ransacked King’s Landing?",
    o: [
      "Wes Borland",
      "Harry Strickland",
      "Kiefer Sutherland",
      "Robert Westland"
    ],
    a:"b"
  }
]

//Comment out this section to get rid of annoying loading
//Loading function for a bit of cinematic effect
function loading() {
  process.stdout.write("Checking Your Answer");
  for(var i = 0; i < 4; i++){
    sleep.sleep(1)
    process.stdout.write(".");
  }
  console.log();
}


//function to ask a question a check the answer
function play(question,answer,options) {
  console.log(question);
  console.log("a) "+options[0]);
  console.log("b) "+options[1]);
  console.log("c) "+options[2]);
  console.log("d) "+options[3]);

  var userAnswer = readlineSync.question("Your Option: ")
  userAnswer = userAnswer.toLowerCase();

  loading();

  while((userAnswer != "a" && userAnswer !="b") && (userAnswer != "c" && userAnswer !="d")){
    console.log(chalk.red("Please enter a valid Input"))
    userAnswer = readlineSync.question("Your Option: ")
    userAnswer = userAnswer.toLowerCase();
  }

  console.log("--------------------")
  if(userAnswer == answer) {
    score = score + 1;
    console.log(chalk.green("Correct Answer"))
  }else {
    score = score - .5; 
    console.log(chalk.red("Wrong Answer"))
    console.log(chalk.yellow("Correct Answer is option "+answer));
  }

  console.log(chalk.bgMagenta("Current Score "+score));
  console.log("--------------------")
}


//looping
for(var i = 0 ; i < question.length ; i++) {
  var currentQuestion = question[i];

  play(currentQuestion.q, currentQuestion.a, currentQuestion.o);
}


//Displaying the final score
console.log(chalk.green("Your Final Score is "+score));


//Checking weather the current user has beaten the highscorer
if(score > highScorer.points){
  console.log(chalk.bgYellow("Congrats "+username+" !!! You are The Lord Of Seven Kingdoms"))
}else {
  console.log(chalk.bgRed(highScorer.name+" is still The Lord of Seven Kingdoms"))
}