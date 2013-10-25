$(document).ready(function(){

$(document).on('click', 'button', function(){
		location.reload(); 
	});





var quizQuestionArray = [];
//create class
function quizQuestion(question, answers, correct){
	this.question = question;
	this.answers = answers;
	this.correct = correct;
	quizQuestionArray.push(this);
}
//create each class instance
var question1 = new quizQuestion(question1Question, question1Answers, question1Correct );
var question2 = new quizQuestion(question2Question, question2Answers, question2Correct );
var question3 = new quizQuestion(question3Question, question3Answers, question3Correct );
var question4 = new quizQuestion(question4Question, question4Answers, question4Correct );
var question5 = new quizQuestion(question5Question, question5Answers, question5Correct );

//array of all of the questions
var questions = [question1, question2, question3, question4, question5];
//document.write(quizQuestionArray.length);
//displays the current question
function displayQuestion(questionNumber) {
	 $('#singlequestion').html(questions[questionNumber-1].question);
}
//displays answers for the current question
function displayAnswers(questionNumber){
	for (var i = 0; i < questions[questionNumber-1].answers.length; i++) {
		$('#choice'+i).html(questions[questionNumber-1].answers[i]);		
	}
}
//displays what question user is on of total number of questions
function numQuestions(questionNumber){
	var numQuestions = questions.length;
	$('#number').html(questionNumber);
	$('#total').html(numQuestions);
	return numQuestions;
}

var numCorrect = 0;
var correctArray = [];

//displays the quiz
function displayQuiz(questionNumber) {
	
	numQuestions(questionNumber);	

	displayQuestion(questionNumber);
	displayAnswers(questionNumber);

	$('.submit').click(function(e) {
		
		var answer = $('input[name="answers"]:checked').val();
		
		if (answer == questions[questionNumber -1].correct) {
			numCorrect = numCorrect+1;
			correctArray.push(answer);
		} else {
			numCorrect = numCorrect+0 ;
		}
		
		$('#numcorrect').html('Correct Answers: '+correctArray.length);
		//$('#array').html(correctArray);
        
        e.preventDefault();
        if (questionNumber == questions.length) {
        	$('#singlequestion').html('That is the end of the quiz');
        	$('#progress').hide();
        	$('form').hide();
        	$('#numcorrect').html('You got '+numCorrect+' out of ' +questions.length+ ' questions correct!');
        	$('#startover').show();
        	
        } else {
        questionNumber++;
        $('.submit').off('click');
        displayQuiz(questionNumber);
    }
    });
}

displayQuiz(1);
});

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
