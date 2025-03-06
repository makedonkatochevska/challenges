//html elements
const studyDurationInput = document.getElementById("studyDuration");
const breakDurationInput = document.getElementById("breakDuration");
const startBtn = document.getElementById("startButton");
const progressBar = document.getElementById("progressBar");
const sessionHistoryDiv = document.getElementById("sessionHistory");

//initial variables
let studyDuration;
let breakDuration;
let totalTime;
let interval = null;
let elapsedTime = 0;
let existingSessions;

//variable for current date and time
const currentDate = new Date();

//fnc for date
function getDate() {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const formattedDate = `${day}/${month}/${year}`;
  return formattedDate;
}

//fnc for time
function getTime() {
  let hour = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  const amOrPm = hour >= 12 ? "PM" : "AM";

  //formatted minutes and seconds to always be 2 digits
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  //formatted hours for 12hour time format
  hour = hour % 12;
  hour = hour ? hour : 12;

  const formattedTime = `${hour}:${formattedMinutes}:${formattedSeconds} ${amOrPm}`;
  return formattedTime;
}

//fnc for setting the durations into local storage
function getDurations() {
  existingSessions = retrieveData(); //retrieve existing sessions

  //setting the value of studyDuration and breakDuration from the input field
  studyDuration = +studyDurationInput.value;
  breakDuration = +breakDurationInput.value;

  //newSession object
  const newSession = {
    date: getDate(),
    time: getTime(),
    study: studyDuration,
    break: breakDuration,
  };

  //the newSession object being pushed into the array sessions
  existingSessions.push(newSession);

  //setting the array into the local storage as a string
  localStorage.setItem("Sessions", JSON.stringify(existingSessions));

  //resetting the input value
  studyDurationInput.value = "";
  breakDurationInput.value = "";
}

//fnc for retrieving the data from local storage
const retrieveData = () => {
  const localStorageData = localStorage.getItem("Sessions");
  if (localStorageData) {
    return JSON.parse(localStorageData);
  } else {
    return [];
  }
};

//fnc for filling the progress bar
function fillProgressBar() {
  totalTime = (studyDuration + breakDuration) * 60; //total time in seconds

  //if there is not valid time entered don't proceed
  if (totalTime === 0) return;

  //when the progress bar reaches 100%, the interval stops
  if (elapsedTime >= totalTime) {
    clearInterval(interval);
    alert("Session complete!");

    displayText();
  }

  elapsedTime++; //incrementing the elapsed time every second
  let fulfillmentPercentage = (elapsedTime / totalTime) * 100; //calculating the fulfillment percentage based on the values provided

  progressBar.style.width = `${fulfillmentPercentage}%`;
  progressBar.setAttribute("aria-valuenow", fulfillmentPercentage.toFixed(2));

  console.log("Interval working");
}

//fnc for displaying the text
function displayText() {
  existingSessions = retrieveData();

  // Clear the session history div
  sessionHistoryDiv.innerHTML = "";

  existingSessions.forEach((session, index) => {
    sessionHistoryDiv.innerHTML += `<p>Date: ${session.date}, Time: ${session.time}, Study: ${session.study} minutes, Break: ${session.break} minutes </p>`;
  });
}

//event listener for the btn
startBtn.addEventListener("click", () => {
  getDurations(); //calling the fnc to store the durations on the local storage

  //resetting values
  elapsedTime = 0;
  progressBar.style.width = "0%";
  progressBar.setAttribute("aria-valuenow", "0");

  //stop any previous intervals
  if (interval) {
    clearInterval(interval);
  }

  interval = setInterval(() => {
    fillProgressBar();
  }, 1000);
});

//event listener for the whole page to display the sessions history
window.addEventListener("load", displayText);
