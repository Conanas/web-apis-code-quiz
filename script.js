// variables
var displayElement = document.querySelector(".display");
var viewHighscores = document.querySelector(".highscoresButton");
var timerSpan = document.querySelector(".timerSpan");
var correctWrong = document.querySelector(".correct-or-wrong");
var score = 0;
var questionNo = 0;
var initials = "";
var interval;
var totalSeconds = 10;
var secondsLeft = 0;

// question objects array
var questions = [{
    question: "Question 1: Semper ubi sub ubi. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
    options: [
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4"
    ],
    answer: 2
}, {
    question: "Question 2: Semper ubi sub ubi. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
    options: [
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4"
    ],
    answer: 3
}, {
    question: "Question 3: Semper ubi sub ubi. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
    options: [
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4"
    ],
    answer: 1
}, {
    question: "Question 4: Semper ubi sub ubi. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
    options: [
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4"
    ],
    answer: 2
}, {
    question: "Question 5: Semper ubi sub ubi. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
    options: [
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4"
    ],
    answer: 4
}, {
    question: "Question 6: Semper ubi sub ubi. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
    options: [
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4"
    ],
    answer: 2
}, {
    question: "Question 7: Semper ubi sub ubi. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
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

// all done object
var allDoneObj = {
    heading: "All Done",
    message: "Your score is ",
    label: "Enter your initials: ",
    button: "Submit"
}

// save object
var saveObjects = {
    localScore: 0,
    localInitials: ""
}

// array of save objects
var saveArray = [];

// highscores object
var highscoresObj = {
    heading: "Highscores",
    scoreHeading: "Score",
    initialsHeading: "Initials",
    goBackButton: "Go Back",
    clearScoresButton: "Clear Highscores"
}

// timeout object
var timeoutObject = {
    heading: "You are out of time"
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

    // start screen timer display
    timerSpan.textContent = totalSeconds;

    startScreenButton.addEventListener("click", startQuiz);
}

// clear screen
function clearScreen() {
    displayElement.innerHTML = "";
}

// starts quiz
function startQuiz(event) {
    // startTimer();
    clearScreen();
    startTimer();
    questionsLayout();
}

// layout questions
function questionsLayout() {

    // question
    var questionDisplay = document.createElement("p");
    questionDisplay.textContent = questions[questionNo].question;
    questionDisplay.setAttribute("class", "question");
    displayElement.appendChild(questionDisplay);

    // ul
    var questionsUl = document.createElement("ul");
    questionsUl.setAttribute("class", "questionsUl");
    displayElement.appendChild(questionsUl);

    // questions li
    for (var i = 0; i < questions[questionNo].options.length; i++) {
        var questionsLi = document.createElement("li");
        questionsLi.setAttribute("class", "questionsLi");
        questionsUl.appendChild(questionsLi);

        // answer button
        var answerButton = document.createElement("button");
        answerButton.textContent = questions[questionNo].options[i];
        answerButton.setAttribute("class", "answerButton");
        answerButton.setAttribute("id", i);
        questionsLi.appendChild(answerButton);

        // check answer
        answerButton.addEventListener("click", checkAnswer);
    }

}

// check answer
function checkAnswer(event) {
    if (event.target.id == questions[questionNo].answer - 1) {
        correctWrong.textContent = "Correct!";
        score++;
    } else {
        correctWrong.textContent = "Wrong!";
    }
    timeoutAnswerDisplay();
    clearScreen();
    // check if last question
    if (questionNo === questions.length - 1) {
        // if last question
        // submit, display scores and stop timer
        stopTimer();
        displayAllDone();
    } else {
        questionNo++;
        questionsLayout(questionNo);
    }

}

// timeout answer
function timeoutAnswerDisplay() {
    var answerDisplayTimeout = setTimeout(function() {
        correctWrong.textContent = "";
    }, 1000);
}

// all done display after completion of quiz
function displayAllDone() {

    // all done heading
    var allDoneHeading = document.createElement("h1");
    allDoneHeading.textContent = allDoneObj.heading;
    allDoneHeading.setAttribute("class", "allDoneHeading");
    displayElement.appendChild(allDoneHeading);

    // all done message
    var allDoneMessage = document.createElement("p");
    allDoneMessage.textContent = `${allDoneObj.message} ${score}`;
    allDoneMessage.setAttribute("class", "allDoneMessage");
    displayElement.appendChild(allDoneMessage);

    // input label
    var allDoneLabel = document.createElement("label");
    allDoneLabel.textContent = allDoneObj.label;
    allDoneLabel.setAttribute("class", "allDoneLabel");
    allDoneLabel.setAttribute("for", "allDoneInput");
    displayElement.appendChild(allDoneLabel);

    // input box
    var allDoneInput = document.createElement("input");
    allDoneInput.setAttribute("class", "allDoneInput");
    allDoneInput.setAttribute("type", "check");
    allDoneInput.setAttribute("id", "allDoneInput");
    displayElement.appendChild(allDoneInput);

    // submit button
    var allDoneButton = document.createElement("button");
    allDoneButton.textContent = allDoneObj.button;
    allDoneButton.setAttribute("class", "allDoneButton");
    displayElement.appendChild(allDoneButton);

    // submit click event listenerto save score
    allDoneButton.addEventListener("click", submitScore);
}

// submit and save scores to localStorage
function submitScore() {
    if (localStorage.length !== 0) {
        saveArray = JSON.parse(localStorage.getItem("saves"));
    } else {
        saveArray = [];
    }
    saveObjects.localScore = score;
    saveObjects.localInitials = document.getElementById("allDoneInput").value;
    saveArray.push(saveObjects);
    localStorage.setItem("saves", JSON.stringify(saveArray));

    // reset question number and score
    questionNo = 0;
    score = 0;

    showHighscores();
}

// show highscores table
function showHighscores() {

    clearScreen();

    // highscores heading
    var showHighscoresHeading = document.createElement("h1");
    showHighscoresHeading.textContent = highscoresObj.heading;
    showHighscoresHeading.setAttribute("class", "highscoresHeading");
    displayElement.appendChild(showHighscoresHeading);

    // highscores table
    var highscoresTable = document.createElement("table");
    highscoresTable.setAttribute("class", "highscoresTable");
    displayElement.appendChild(highscoresTable);

    // highscores table heading row
    var highscoresTableHeadingRow = document.createElement("tr");
    highscoresTable.appendChild(highscoresTableHeadingRow);

    // highscore table score heading
    var highscoresTableScoreHeading = document.createElement("th");
    highscoresTableScoreHeading.textContent = highscoresObj.scoreHeading;
    highscoresTableHeadingRow.appendChild(highscoresTableScoreHeading);

    // highscore table initial row
    var highscoresTableInitialHeading = document.createElement("th");
    highscoresTableInitialHeading.textContent = highscoresObj.initialsHeading;
    highscoresTableHeadingRow.appendChild(highscoresTableInitialHeading);

    // for loop to display all scores in local storage in highscore table
    for (var i = 0; i < saveArray.length; i++) {

        // new table row
        var highscoresTableRow = document.createElement("tr");
        highscoresTable.appendChild(highscoresTableRow);

        // new table data score
        var highscoresTableDataScore = document.createElement("td");
        highscoresTableDataScore.textContent = saveArray[i].localScore;
        highscoresTableRow.appendChild(highscoresTableDataScore);

        // new table data initials
        var highscoresTableDataInitials = document.createElement("td");
        highscoresTableDataInitials.textContent = saveArray[i].localInitials;
        highscoresTableRow.appendChild(highscoresTableDataInitials);
    }

    // highscores display screen buttons
    // go back button
    var highscoresGoBackButton = document.createElement("button");
    highscoresGoBackButton.textContent = highscoresObj.goBackButton;
    highscoresGoBackButton.setAttribute("class", "goBackButton");
    displayElement.appendChild(highscoresGoBackButton);
    highscoresGoBackButton.addEventListener("click", goBack);

    // clear scores button
    var highscoresClearButton = document.createElement("button");
    highscoresClearButton.textContent = highscoresObj.clearScoresButton;
    highscoresClearButton.setAttribute("class", "clearButton");
    displayElement.appendChild(highscoresClearButton);
    highscoresClearButton.addEventListener("click", clearHighscores);
}

// go back to welcome screen
function goBack() {
    clearScreen();
    welcomeScreen();
}

// clear scores and local storage
function clearHighscores() {
    localStorage.clear();
    saveArray = [];
    saveObjects.localScore = 0;
    saveObjects.localInitials = "";
    clearScreen();
    showHighscores();
}

// start quiz timer
function startTimer() {
    interval = setInterval(function() {
        secondsLeft++;
        updateTimerDisplay();
        if (secondsLeft === totalSeconds) {
            finishTimer();
        }
    }, 1000);
}

// update timer display
function updateTimerDisplay() {
    timerSpan.textContent = totalSeconds - secondsLeft;
}

// upon timer finish
function finishTimer() {
    stopTimer();
    clearScreen();
    displayTimeoutScreen();
    var timeoutDisplaytimeout = setTimeout(function() {
        clearScreen();
        displayAllDone();
    }, 1000);
}

// stop timer
function stopTimer() {
    clearInterval(interval);
    secondsLeft = 0;
}

// display out of time screen
function displayTimeoutScreen() {
    var timeoutHeading = document.createElement("h1");
    timeoutHeading.textContent = timeoutObject.heading;
    timeoutHeading.setAttribute("class", "timeoutHeading");
    displayElement.appendChild(timeoutHeading);
}

// view highscores button from main element
viewHighscores.addEventListener("click", showHighscores);

// open welcome screen
welcomeScreen();