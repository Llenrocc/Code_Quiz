var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;
// Variables
var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var options = document.querySelector(".option");
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var totQuestions = questions.length;

var selectedOption = document.querySelector('input[type=radio]:checked');

var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');

// Adding load question function 
function loadQuestion (questionIndex) {
    console.log("Entered this function");
    var q = questions[questionIndex];
    console.log(q);
    questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
    opt1.innerText = q.option1;
    opt2.innerText = q.option2;
    opt3.innerText = q.option3;
    opt4.innerText = q.option4;
}

function loadNextQuestion () {
    var selectedOption = document.querySelector('input[type=radio]:checked');
    if (!selectedOption) {
        return;
    }
}

var answer = selectedOption.value;
if (questions[currentQuestion].answer == answer) {
    score += 10;
}

 // Added by deenu
 options.addEventListener("click", function(){
    var selectedOption = document.querySelector('input[type=radio]:checked');

    if(selectedOption){
        
    }
 })




selectedOption.checked = false;
currentQuestion++;
if (currentQuestion == totQuestions -1) {
        nextButton.textContent = 'Finish';
}

if (currentQuestion == totQuestions) {
    container.style.display = 'none';
    resultCont.style.display = '';
    resultCont.textContent = 'Your score ' + score;
}

loadQuestion(currentQuestion);
