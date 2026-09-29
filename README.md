# SpendWise

SpendWise is a simple budgeting application that helps users keep track of their monthly budget and expenses.

The project uses HTML to create the webpage structure, CSS to style the application, and JavaScript to add functionality and process budgeting information.

## Project Purpose

The purpose of SpendWise is to demonstrate how JavaScript can be used to make a webpage interactive and process user-provided data.

The application allows the user to enter their monthly budget and total expenses. JavaScript then calculates the remaining balance and displays the results in the browser console.

## JavaScript Concepts Implemented

The SpendWise project demonstrates the following JavaScript concepts:

- Variables
- Data types
- User input
- Calculations
- Functions
- Function parameters
- Return values
- Console output

## Variables

Variables are used to store important budgeting information.

```javascript
let monthlyBudget;
let totalExpenses;
```

The `monthlyBudget` variable stores the user's monthly budget, while the `totalExpenses` variable stores the user's total expenses.

These variables are used to store the information needed for the budget calculation.

## How User Input Is Collected

SpendWise uses the JavaScript `prompt()` function to collect information from the user.

The user is asked to enter their monthly budget:

```javascript
monthlyBudget = Number(prompt("Enter your monthly budget:"));
```

The user is also asked to enter their total expenses:

```javascript
totalExpenses = Number(prompt("Enter your total expenses:"));
```

The `Number()` function converts the information entered by the user into numbers. This allows JavaScript to use the values in mathematical calculations.

For example, the user can enter:

```text
Monthly Budget: 50000
Total Expenses: 15000
```

## How Calculations Are Performed

SpendWise calculates the remaining balance by subtracting the total expenses from the monthly budget.

The calculation is:

```text
Remaining Balance = Monthly Budget - Total Expenses
```

For example:

```text
50000 - 15000 = 35000
```

Therefore, if the monthly budget is 50000 and the total expenses are 15000, the remaining balance is 35000.

## How Functions Organize the Code

SpendWise uses a reusable function called `calculateRemainingBalance()` to perform the budget calculation.

```javascript
function calculateRemainingBalance(budget, expenses) {
    return budget - expenses;
}
```

The function accepts two parameters:

- `budget` - the user's monthly budget
- `expenses` - the user's total expenses

The function subtracts the expenses from the budget and returns the remaining balance.

The function is called using:

```javascript
let remainingBalance = calculateRemainingBalance(
    monthlyBudget,
    totalExpenses
);
```

Using a reusable function keeps the calculation separate from the rest of the code. It makes the code easier to organize, understand, and reuse with different budget and expense values.

## Displaying Results

SpendWise uses `console.log()` to display the budgeting results in the browser console.

```javascript
console.log("Monthly Budget: $" + monthlyBudget);
console.log("Total Expenses: $" + totalExpenses);
console.log("Remaining Balance: $" + remainingBalance);
```

The results are clearly labeled so that the user can easily understand the budgeting information.

For example, the console may display:

```text
Monthly Budget: $50000
Total Expenses: $15000
Remaining Balance: $35000
```

## JavaScript File

The JavaScript functionality is stored in a separate file called `script.js`.

The JavaScript file is connected to the HTML page using:

```html
<script src="script.js"></script>
```

This allows the browser to load and execute the JavaScript when the SpendWise webpage runs.

## Project Files

The project contains the following files:

- `index.html` - Contains the structure and content of the SpendWise webpage.
- `style.css` - Contains the styling and visual design of the webpage.
- `script.js` - Contains the JavaScript variables, user input, calculations, reusable function, and console output.
- `README.md` - Contains information about the SpendWise project and the JavaScript concepts implemented.

## How to Run the Project

1. Open the SpendWise project in Visual Studio Code.
2. Open `index.html` using a web browser or Live Server.
3. Enter your monthly budget when the prompt appears.
4. Enter your total expenses when the second prompt appears.
5. Open the browser Developer Tools.
6. Select the Console tab.
7. View the monthly budget, total expenses, and remaining balance.

## Example

If the user enters:

```text
Monthly Budget: 40000
Total Expenses: 12000
```

SpendWise performs the calculation:

```text
40000 - 12000 = 28000
```

The console displays:

```text
Monthly Budget: $40000
Total Expenses: $12000
Remaining Balance: $28000
```

## Conclusion

SpendWise demonstrates how JavaScript can transform a webpage from a visual interface into an application that can collect and process data.

The project uses variables to store budgeting information, prompts to collect user input, calculations to determine the remaining balance, a reusable function to organize the calculation, and `console.log()` to display the results.