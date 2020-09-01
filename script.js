// variables
var displayElement = document.querySelector(".display");
var viewHighscores = document.querySelector(".highscoresButton");
var timerSpan = document.querySelector(".timerSpan");
var correctWrong = document.querySelector(".correct-or-wrong");
var score = 0;
var questionNo = 0;
var initials = "";
var interval;
var totalSeconds = 100;
var secondsLeft = 0;
var timePenalty = 10;

// question objects array
var questions = [{
    question: "What kind of storage is used to reload data after closing the browser?",
    options: [
        "scriptStorage",
        "localStorage",
        "loadStroage",
        "sessionStorage"
    ],
    answer: 2
}, {
    question: "What does DOM stand for?",
    options: [
        'Document Other Model',
        'Document Over Model',
        'Data Object Model',
        'Document Object Model',
        'Date Object Mode',
        'Document Object Mode'
    ],
    answer: 4,
}, {
    question: "Inside which HTML element do we put the JavaScript?",
    options: [
        "<link>",
        "<meta>",
        "<script>",
        "<javascript>",
        '<p>'
    ],
    answer: 3
}, {
    question: `Which event occurs when the user clicks on an HTML element?`,
    options: [
        'onmouseclick',
        'onsubmit',
        'onchange',
        'onclick',
        'onclickdown'
    ],
    answer: 4
}, {
    question: "Where is the correct place to insert javaScript?",
    options: [
        "The <head> section",
        "The <body> section",
        "The <header> section",
        "The <footer> section"
    ],
    answer: 2
}, {
    question: 'How do you write "Hello World" in an alert box?',
    options: [
        'msg("Hello World")',
        'msgBox("Hello World',
        'alertBox("Hello World")',
        'prompt("Hellow World")',
        'confirm("Hellow World)',
        'alert("Hello World")'
    ],
    answer: 6
}, {
    question: "How do you create a function in JavaScript?",
    options: [
        "function = myFunction()",
        "function myFunction()",
        "function() myFunction",
        "myFunction() function"
    ],
    answer: 2
}, {
    question: "How to write an IF statement in JavaScript?",
    options: [
        'if (i == 5)',
        'if (i = 5)',
        'if i = 5',
        'if i == 5 then',
        'if (i = 5) then'
    ],
    answer: 1
}, {
    question: "What is the correct way to write a JavaScript array?",
    options: [
        'myArray = var["Hello", "World"]',
        'var = myArray["Hello", "World"]',
        'var myArray = ("Hello", "World")',
        'var myArray[] = "Hello", "World"',
        'var myArray = ["Hello", "World"]',
        'var[] myArray = "Hello", "World"'
    ],
    answer: 5,
}, {
    question: "How do you round the number 7.25, to the nearest integer?",
    options: [
        'Math.rnd(7.25)',
        'Math.round[7.25]',
        'Math.round(7.25)',
        'round(Math(7.25))',
        'rnd(7.25).Math'
    ],
    answer: 3,
}, {
    question: "Which of the following function of String object splits a String object into an array of strings by separating the string into substrings?",
    options: [
        'string()',
        'replace()',
        'splice()',
        'split()',
        'slice()'
    ],
    answer: 4,
}, {
    question: "Which of the following function of Array object removes the last element from an array and returns that element?",
    options: [
        'pop()',
        'push()',
        'shove()',
        'remove()'
    ],
    answer: 1,
}, {
    question: "How can you detect the client's browser name?",
    options: [
        'navigator.appBrowser',
        'app.browserName',
        'navigator.browserName',
        'app.navigator',
        'navigator.appName'
    ],
    answer: 5,
}, {
    question: "How do you declare a JavaScript variable",
    options: [
        'variable x',
        'x = var',
        'var x',
        'var x()',
        'var() x'
    ],
    answer: 3,
}, {
    question: "Which operator is used to assign a value to a variable?",
    options: [
        '!',
        '=',
        '*',
        '#',
        '+',
        '%'
    ],
    answer: 2,
}]

// startscreen object
var startScreen = {
    startTitle: "Coding Quiz Challenge",
    startMessage: "Try to answer the following questions about coding within the time limit. Keep in mind that all incorrect answers will reduce the time left on the clock",
    startButton: "Start"
}

// correct or wrong text object
var correctWrongDisplay = {
    correctText: "Correct!",
    wrongText: "Wrong!",
    displayTime: 1000
}

// all done object for all done text
var allDoneObj = {
    heading: "All Done",
    message: "Your score is ",
    label: "Enter your initials: ",
    button: "Submit"
}

// save object to save current score and initials
var saveObjects = {
    localScore: 0,
    localInitials: ""
}

// array of save objects to be loaded from and saved to localStorage
var saveArray = [];

// highscores object stores text for highscores page
var highscoresObj = {
    heading: "Highscores",
    scoreHeading: "Score",
    initialsHeading: "Initials",
    goBackButton: "Start Screen",
    clearScoresButton: "Clear Highscores"
}

// timeout object stores text for timeout message
var timeoutObject = {
    heading: "You are out of time"
}

// loads the start screen to the displayElement at index.html
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

    // add click event listener to the start button to start the quiz
    startScreenButton.addEventListener("click", startQuiz);
}

// clears the screen at the displayElement at index.html to make the displayElement ready for the next screen
function clearScreen() {
    displayElement.innerHTML = "";
}

// starts the quiz
function startQuiz(event) {

    // reset question number and score
    questionNo = 0;
    score = 0;

    // clear the screen
    clearScreen();

    // start the timer
    startTimer();

    // display the questions
    questionsLayout();
}

// lays out the questions to the displayElement at index.html
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

// checks the answer to the question and displays correct or wrong at the bottom of the screen
function checkAnswer(event) {

    // if the correct answer is clicked
    if (event.target.id == questions[questionNo].answer - 1) {

        // dispaly correct at bottom of the scren
        correctWrong.textContent = correctWrongDisplay.correctText;

        // increase the score
        score++;

    } else {

        // display wrong at the bottom of the screen
        correctWrong.textContent = correctWrongDisplay.wrongText;

        // reduce the time
        reduceTime();

    }

    // clear the answer display at the bottom of the screen
    timeoutAnswerDisplay();

    // clear screen for next question
    clearScreen();

    // check if last question
    if (questionNo === questions.length - 1) {

        // stop timer
        stopTimer();

        // display allDone screen
        displayAllDone();

    } else {

        // increase question number
        questionNo++;

        // displays the next question
        questionsLayout();
    }
}

// clear the correct or wrong display at the bottom of the screen
function timeoutAnswerDisplay() {

    // start timeout to clear answer display
    var answerDisplayTimeout = setTimeout(function() {

        // set text to empty string
        correctWrong.textContent = "";
    }, correctWrongDisplay.displayTime);
}

// all done display after completion of quiz including submit button
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

    // load scores from localStorage to saveArray
    loadLocalScores();

    // assign score from session to saveObject
    saveObjects.localScore = score;

    // assign initials from allDoneInput to saveObject
    saveObjects.localInitials = document.getElementById("allDoneInput").value;

    // add the new score and initial object to the saveArray
    saveArray.push(saveObjects);

    // use bubble sort to organise the array
    bubbleSortSaveArray();

    // save saveArray to localStorage
    localStorage.setItem("saves", JSON.stringify(saveArray));

    // load highscores screen
    showHighscores();
}

// load highscores from localStorage into saveArray
function loadLocalScores() {

    // if there data in the localStorage
    if (localStorage.length !== 0) {

        // assign the localStorage to saveArray
        saveArray = JSON.parse(localStorage.getItem("saves"));

    } else {

        // if there is no localStorage then saveArray is empty
        saveArray = [];

    }
}

// sort the save array from highest to lowest
function bubbleSortSaveArray() {

    // varible for swapping state
    var swap = false;

    // arrayLength variable for search
    var arrayLength = saveArray.length - 1;

    // do comparisons while the swap state is true
    do {

        // swap state is false
        swap = false;

        // for each element of the array except the last one
        for (var i = 0; i < arrayLength; i++) {

            // if the score ofthe current object is less than the score of the next object
            if (saveArray[i].localScore < saveArray[i + 1].localScore) {

                // save the current object into temporary variable
                var temp = saveArray[i];

                // the current object becomes the next object
                saveArray[i] = saveArray[i + 1];

                // the next object becomes the current object
                saveArray[i + 1] = temp;

                // swap state is true
                swap = true;
            }
        }

        // the rest of the array is shortened
        arrayLength--;

        // swap state is true and so sort the rest of the array
        // if there were no swaps then swap state is false and so the array is sorted
    } while (swap);
}

// show highscores table screen
function showHighscores() {

    // if there is no data in saveArray
    if (saveArray.length === 0) {

        // load scores from localStorage to saveArray to display them
        loadLocalScores();
    }

    // clear screen if needed
    clearScreen();

    // stop timer if needed
    stopTimer();

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

    // clear screen
    clearScreen();

    // loads start screen
    welcomeScreen();
}

// clear scores and local storage
function clearHighscores() {

    // clear localStorage
    localStorage.clear();

    // clears the saveArray
    saveArray = [];

    // save the current session score to the save object
    saveObjects.localScore = 0;

    // save the initials in the save object
    saveObjects.localInitials = "";

    // clear the screen
    clearScreen();

    // load the highscores screen
    showHighscores();
}

// start quiz timer
function startTimer() {

    // setInterval to update the time display every second
    interval = setInterval(function() {

        // increase the seconds remaning
        secondsLeft++;

        // update the timer display
        updateTimerDisplay();

        // if the seconds remaining is greater than the total seconds then stop the timer
        if (secondsLeft > totalSeconds) {

            // stop the timer
            finishTimer();
        }

        // interval every second
    }, 1000);
}

// update timer display
function updateTimerDisplay() {

    // if the remaing seconds exceeds the total seconds
    if (secondsLeft > totalSeconds) {

        // timer display set to 0
        timerSpan.textContent = 0;

    } else {

        // display remaining seconds
        timerSpan.textContent = totalSeconds - secondsLeft;

    }
}

// upon timer finish
function finishTimer() {

    // stop the timer
    stopTimer();

    // clear the screen
    clearScreen();

    // display out of time message
    displayTimeoutScreen();

    // after 1 second
    var timeoutDisplaytimeout = setTimeout(function() {

        // clear the time out message
        clearScreen();

        // load all done screen
        displayAllDone();

    }, 1000);
}

// stop timer
function stopTimer() {

    // stop the timer
    clearInterval(interval);

    // reset the seconds remaining
    secondsLeft = 0;
}

// display out of time screen
function displayTimeoutScreen() {

    // create and load out of time message element
    var timeoutHeading = document.createElement("h1");
    timeoutHeading.textContent = timeoutObject.heading;
    timeoutHeading.setAttribute("class", "timeoutHeading");
    displayElement.appendChild(timeoutHeading);
}

// reduce time for incorrect answer
function reduceTime() {
    secondsLeft += timePenalty;
}

// view highscores button from main element
viewHighscores.addEventListener("click", showHighscores);

// open welcome screen
welcomeScreen();