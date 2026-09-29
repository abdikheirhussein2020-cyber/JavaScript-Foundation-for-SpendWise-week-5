// SpendWise JavaScript

console.log("SpendWise JavaScript is connected!");

// Budget information
let monthlyBudget;

// Expense information
let totalExpenses;

// Collect budget information from the user
monthlyBudget = Number(prompt("Enter your monthly budget:"));

totalExpenses = Number(prompt("Enter your total expenses:"));

// Function to calculate the remaining balance
function calculateRemainingBalance(budget, expenses) {
    return budget - expenses;
}

// Use the function to calculate the remaining balance
let remainingBalance = calculateRemainingBalance(
    monthlyBudget,
    totalExpenses
);

// Display the results
console.log("Monthly Budget: $" + monthlyBudget);
console.log("Total Expenses: $" + totalExpenses);
console.log("Remaining Balance: $" + remainingBalance);