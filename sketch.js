var canvas, database;
var quiz, contestant, question;
var gameState = 0, contestantCount, allInfo;



function setup(){
  canvas = createCanvas(850,400);

  database = firebase.database();

  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");

  if(contestantCount === 2){
    quiz.updateState(1);
  }

  if(gameState === 1){
    quiz.result();
  }

  
}
