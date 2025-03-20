//html elements
const currentDateParagraph = document.getElementById("currentDate");
const taskName = document.getElementById("taskDescription");
const taskTime = document.getElementById("taskTime");
const taskDate = document.getElementById("taskDate");
const addBtn = document.getElementById("addTaskButton");
const taskListUl = document.getElementById("taskList");

const today = new Date();

//class for creating new task
class Task {
  constructor(_taskName, _taskDate, _taskTime, _taskID = null) {
    this.taskName = _taskName;
    this.taskTime = _taskTime;
    this.taskDate = _taskDate;
    this.taskID = _taskID || Date.now();
  }
}

//class for creating task list a pushing the task obj into the list
class TaskList {
  constructor() {
    this.taskList = this.retrieveListFromLocalStorage();
  }

  addTaskToList(task) {
    this.taskList.push(task);
    this.saveListToLocalStorage(); //update the local storage
  }

  removeTaskFromList(taskId) {
    this.taskList = this.taskList.filter((task) => task.taskID !== taskId);
    this.saveListToLocalStorage(); //update the local storage
  }

  saveListToLocalStorage() {
    localStorage.setItem("taskList", JSON.stringify(this.taskList));
  }

  retrieveListFromLocalStorage() {
    const savedTasks = localStorage.getItem("taskList");

    if (savedTasks) {
      return JSON.parse(savedTasks).map(
        (task) =>
          new Task(task.taskName, task.taskDate, task.taskTime, task.taskID)
      ); //return it with map() so they can be instance from Task class and not plain objects
    } else {
      return [];
    }
  }
}

//instance for a new list
const taskList = new TaskList();

//store tasks fnc
function getUserTasks(taskList) {
  const taskNameValue = taskName.value.trim();
  const taskDateValue = taskDate.value.trim();
  const taskTimeValue = taskTime.value.trim();

  // Check if input fields are not empty
  if (!taskNameValue || !taskDateValue || !taskTimeValue) {
    alert("Please enter valid task info");
    return;
  }

  const newTask = new Task(taskNameValue, taskDateValue, taskTimeValue);

  taskList.addTaskToList(newTask);
  taskList.saveListToLocalStorage();
  console.log(taskList);
}

//display tasks fnc
function displayTasks(taskList) {
  taskListUl.innerHTML = "";

  taskList.taskList.forEach((task) => {
    const li = document.createElement("li");
    li.className =
      "list-group-item d-flex justify-content-between align-items-center";
    li.textContent = `${task.taskDate} at ${task.taskTime}: ${task.taskName}`;

    //remove btn
    const removeBtn = document.createElement("button");
    removeBtn.className = "btn btn-danger btn-sm";
    removeBtn.textContent = "Remove";

    //remove btn event listener
    removeBtn.addEventListener("click", () => {
      taskList.removeTaskFromList(task.taskID);
      li.remove();
      console.log("Updated List:", taskList.taskList);
    });

    //calling the highlight fnc
    highlightTask(task.taskDate, li);

    li.appendChild(removeBtn);
    taskListUl.appendChild(li);
  });

  //reset values
  taskName.value = "";
  taskDate.value = "";
  taskTime.value = "";
}

function highlightTask(taskDate, liElement) {
  if (today.toISOString().split("T")[0] === taskDate) {
    liElement.classList.add("highlight-current-date");
  }
}

//display current date and list from local storage on load
window.addEventListener("DOMContentLoaded", () => {
  currentDateParagraph.textContent = `Today is ${today.toDateString()}`;
  displayTasks(taskList);
});

//click event for addBtn
addBtn.addEventListener("click", () => {
  getUserTasks(taskList);
  displayTasks(taskList);
});
