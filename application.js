$(document).ready(function(){

// Question 1
var question1Question = "Who has scored the most touchdowns in NFL history?";
var question1Answers = ["Jim Brown", "LaDainian Tomlinson", "Jerry Rice", "Emmitt Smith"];
var question1Correct = 2;

// Question 2
var question2Question = "Which quarterback threw for the most yards during his rookie season?";
var question2Answers = ["Cam Newton", "Andrew Luck", "Dan Marino", "Peyton Manning"];
var question2Correct = 1;

// Question 3
var question3Question = "Who is the all time leading scorer in NBA History?";
var question3Answers = ["Kareem Abdul Jabbar", "Michael Jordan", "Kobe Bryant", "Karl Malone"];
var question3Correct = 0;

// Question 4
var question4Question = "How many home runs did Barry Bonds hit during his record breaking year?";
var question4Answers = [61, 83, 73, 70];
var question4Correct = 2;

// Question 5
var question5Question = "Which QB threw an NFL record 50 touchdowns in 2007?";
var question5Answers = ["Peyton Manning", "Drew Brees", "Aaron Rodgers", "Tom Brady"];
var question5Correct = 3;


function quizQuestion(question, answers, correct){
	this.question = question;
	this.answers = answers;
	this.correct = correct;
}

var question1 = new quizQuestion(question1Question, question1Answers, question1Correct );
var question2 = new quizQuestion(question2Question, question2Answers, question2Correct );
var question3 = new quizQuestion(question3Question, question3Answers, question3Correct );
var question4 = new quizQuestion(question4Question, question4Answers, question4Correct );
var question5 = new quizQuestion(question5Question, question5Answers, question5Correct );

var questions = [question1, question2, question3, question4, question5];
var quizQuestions = [question1.question, question2.question, question3.question, question4.question, question5.question]
var quizAnswers = [question1.answers, question2.answers, question3.answers, question4.answers, question5.answers]

function displayQuestion(questionNumber) {
	 $('#singlequestion').html(quizQuestions[questionNumber-1]);
}

function displayAnswers(questionNumber){
	for (var i = 0; i < 4; i++) {
		$('#choice'+i).html(quizAnswers[questionNumber-1][i]);		
	}
}

//var questionNumber = 1;


/*function nextQuestion(questionNumber)
 $('.submit').click(function (e) {
 		questionNumber = 1;
        e.preventDefault();
        questionNumber++;
    });
*/
function displayQuiz(questionNumber) {
	var numQuestions = questions.length;
	$('#number').html(questionNumber);
	$('#total').html(numQuestions);
	displayQuestion(questionNumber);
	displayAnswers(questionNumber);
	$('.submit').click(function (e) {
        e.preventDefault();
        questionNumber++;
        displayQuiz(questionNumber);
    });

}


displayQuiz(1);
});