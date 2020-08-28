// variables
var displayElement = document.querySelector(".display");
var correctWrong = document.querySelector(".correct-or-wrong");
var score = 0;

// question objects array
var questions = [{
    question1: "Question 1: Semper ubi sub ubi. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
    options: [
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4"
    ],
    answer: 2
}, {
    question1: "Question 2: Semper ubi sub ubi. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
    options: [
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4"
    ],
    answer: 3
}, {
    question1: "Question 3: Semper ubi sub ubi. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
    options: [
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4"
    ],
    answer: 1
}, {
    question1: "Question 4: Semper ubi sub ubi. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
    options: [
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4"
    ],
    answer: 2
}, {
    question1: "Question 5: Semper ubi sub ubi. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
    options: [
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4"
    ],
    answer: 4
}, {
    question1: "Question 6: Semper ubi sub ubi. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
    options: [
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4"
    ],
    answer: 2
}, {
    question1: "Question 7: Semper ubi sub ubi. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
    options: [
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4"
    ],
    answer: 1
}]

// startscreen object
var startScreen = {
    startTitle: "Coding Quiz Challenge",
    startMessage: "Try to answer the following questions about coding within the time limit. Keep in mind that all incorrect answers will reduce the time left on the clock",
    startButton: "Start"
}

// append start screen to page
function welcomeScreen() {

    // start screen title
    var startScreenTitle = document.createElement("h1");
    startScreenTitle.textContent = startScreen.startTitle;
    startScreenTitle.setAttribute("class", "startTitle");
    displayElement.appendChild(startScreenTitle);

    // start screen message
    var startScreenMessage = document.createElement("p");
    startScreenMessage.textContent = startScreen.startMessage;
    startScreenMessage.setAttribute("class", "startMessage");
    displayElement.appendChild(startScreenMessage);

    // start screen start button
    var startScreenButton = document.createElement("button");
    startScreenButton.textContent = startScreen.startButton;
    startScreenButton.setAttribute("class", "startButton");
    displayElement.appendChild(startScreenButton);

    startScreenButton.addEventListener("click", startQuiz);
}

// clear scree
function clearScreen() {
    displayElement.innerHTML = "";
}

// starts quiz
function startQuiz(event) {
    // startTimer();
    clearScreen();
    displayQuestions();
}

// display questions
function displayQuestions() {
    questionsLayout();
    for (var i = 0; i < questions.length; i++) {

    }
}

// layout questions
function questionsLayout() {

    // question
    var questionDisplay = document.createElement("p");
    questionDisplay.textContent = questions[0].question1;
    questionDisplay.setAttribute("class", "question");
    displayElement.appendChild(questionDisplay);

    // ul
    var questionsUl = document.createElement("ul");
    questionsUl.setAttribute("class", "questionsUl");
    displayElement.appendChild(questionsUl);

    // questions li
    for (var i = 0; i < questions[0].options.length; i++) {
        var questionsLi = document.createElement("li");
        questionsLi.setAttribute("class", "questionsLi");
        questionsUl.appendChild(questionsLi);

        // answer button
        var answerButton = document.createElement("button");
        answerButton.textContent = questions[0].options[i];
        answerButton.setAttribute("class", "answerButton");
        answerButton.setAttribute("id", i);
        questionsLi.appendChild(answerButton);

        // check answer
        answerButton.addEventListener("click", checkAnswer);
    }

}

// check answer
function checkAnswer(event) {
    if (event.target.id == questions[0].answer - 1) {
        correctWrong.textContent = "Correct!";
        score++;
    } else {
        correctWrong.textContent = "Wrong!";
    }
    timeoutAnswer();
    clearScreen();
}

// timeout answer
function timeoutAnswer() {
    var answerDisplayTimeout = setTimeout(function() {
        correctWrong.textContent = "";
    }, 2000);
}

// open welcome screen
welcomeScreen();