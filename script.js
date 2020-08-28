var questionElement = document.querySelector(".question");

var questions = [{
    question1: "Question 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
    options: [
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4"
    ],
    answer: "Option 2"
}, {
    question1: "Question 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
    options: [
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4"
    ],
    answer: "Option 3"
}, {
    question1: "Question 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
    options: [
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4"
    ],
    answer: "Option 1"
}, {
    question1: "Question 4: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
    options: [
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4"
    ],
    answer: "Option 2"
}, {
    question1: "Question 5: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
    options: [
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4"
    ],
    answer: "Option 4"
}, {
    question1: "Question 6: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
    options: [
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4"
    ],
    answer: "Option 2"
}, {
    question1: "Question 7: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
    options: [
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4"
    ],
    answer: "Option 1"
}]

var startScreen = {
    startTitle: "Coding Quiz Challenge",
    startMessage: "Try to answer the following questions about coding within the time limit. Keep in mind that all incorrect answers will reduce the time left on the clock",
    startButton: "Start"
}

questionElement.appendChild(document.createElement("h1")).textContent = startScreen.startTitle;
questionElement.appendChild(document.createElement("p")).textContent = startScreen.startMessage;
questionElement.appendChild(document.createElement("button")).textContent = startScreen.startButton;
questionElement.lastElementChild.setAttribute("class", "startButton");

var startButton = document.querySelector(".startButton");

function startQuiz(event) {
    event.preventDefault();
}

startButton.addEventListener("click", startQuiz);