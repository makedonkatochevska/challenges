//html elements
const expenseDescriptionInput = document.getElementById("description");
const expenseAmountInput = document.getElementById("amount");
const dateInput = document.getElementById("date");
const categoryInput = document.getElementById("category");
const editIndexInput = document.getElementById("editIndex");
const submitBtn = document.getElementById("submitExpense");
const expensesList = document.getElementById("expensesList");

//Expense Class
class Expense {
  constructor(_description, _amount, _date, _category, _id = null) {
    this.description = _description;
    this.amount = _amount;
    this.date = _date;
    this.category = _category;
    this.ID = _id || Date.now();
    this.editIndex = -1;
  }
}

const savedExpenses = localStorage.getItem("expenses");

//Retrieve with map so it returns class
let expenses = savedExpenses
  ? JSON.parse(savedExpenses).map(
      (expense) =>
        new Expense(
          expense.description,
          expense.amount,
          expense.date,
          expense.category,
          expense.ID
        )
    )
  : [];

//Function to add new expense to the array
function addOrUpdateExpense() {
  //Validation
  if (
    !expenseDescriptionInput.value.trim() ||
    !expenseAmountInput.value.trim() ||
    !dateInput.value ||
    !categoryInput.value
  ) {
    alert("Please enter valid expense info");
    return;
  }

  //Check if needed to add or update
  if (!editIndexInput.value) {
    addNewExpense();
  } else {
    //update expense
    const expenseToEdit = expenses.find(
      (expense) => +editIndexInput.value === expense.ID
    );

    expenseToEdit.description = expenseDescriptionInput.value.trim();
    expenseToEdit.amount = expenseAmountInput.value;
    expenseToEdit.date = dateInput.value;
    expenseToEdit.category = categoryInput.value;
    expenseToEdit.editIndex = -1;
    editIndexInput.value = "";
  }

  //Update local storage
  localStorage.setItem("expenses", JSON.stringify(expenses));

  //Clear inputs
  expenseDescriptionInput.value = "";
  expenseAmountInput.value = "";
  dateInput.value = "";

  displayExpenses();
}

//Function to add new expense
function addNewExpense() {
  const newExpense = new Expense(
    expenseDescriptionInput.value.trim(),
    expenseAmountInput.value,
    dateInput.value,
    categoryInput.value
  );

  expenses.push(newExpense);
}

//Function to display expenses
function displayExpenses() {
  expensesList.innerHTML = "";

  expenses.forEach((expense) => {
    createExpenseRows(expense);
  });
}

//Function to create table rows
function createExpenseRows(expense) {
  //Table row
  const row = document.createElement("tr");

  //Description table data
  const descriptionTD = document.createElement("td");
  descriptionTD.textContent = expense.description;

  //Amount table data
  const amountTD = document.createElement("td");
  amountTD.textContent = `$${expense.amount}`;

  //Date table data
  const dateTD = document.createElement("td");
  dateTD.innerHTML = expense.date;

  //Category table data
  const categoryTD = document.createElement("td");
  categoryTD.innerHTML = expense.category;

  //Actions table data
  const actionsTD = document.createElement("td");

  //--edit btn
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("btn", "btn-primary", "btn-sm", "me-4");

  editBtn.addEventListener("click", () => {
    editExpense(expense);
  });

  //--delete btn
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("btn", "btn-danger", "btn-sm");

  deleteBtn.addEventListener("click", () => {
    deleteExpense(expense, row);
  });

  actionsTD.append(editBtn, deleteBtn);

  row.append(descriptionTD, amountTD, dateTD, categoryTD, actionsTD);
  expensesList.appendChild(row);
}

//Function to delete expense
function deleteExpense(expense, row) {
  const confirmValue = confirm("Are you sure you want to delete this item?");

  if (!confirmValue) return;

  expenses = expenses.filter((exp) => exp.ID !== expense.ID);

  //Update localStorage
  localStorage.setItem("expenses", JSON.stringify(expenses));

  displayExpenses();
}

//Function to edit expense
function editExpense(expense) {
  expense.editIndex = expense.ID;
  editIndexInput.value = expense.editIndex;

  //Update localStorage
  localStorage.setItem("expenses", JSON.stringify(expenses));

  console.log(expense);

  expenseDescriptionInput.value = expense.description;
  expenseAmountInput.value = expense.amount;
  dateInput.value = expense.date;
  categoryInput.value = expense.category;
}

//Sort Function
function sortExpenses(property, order) {
  expenses.sort((a, b) => {
    let valueA = +a[property];
    let valueB = +b[property];

    return order === "asc" ? valueA - valueB : valueB - valueA;
  });

  displayExpenses();
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

//DISPLAY ON LOAD
displayExpenses();
