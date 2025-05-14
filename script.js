let expenses = [];
const addExpenseBtn = document.getElementById('addExpenseBtn');
const viewExpensesBtn = document.getElementById('viewExpensesBtn');
const exitBtn = document.getElementById('exitBtn');
const addExpenseForm = document.getElementById('addExpenseForm');
const expenseList = document.getElementById('expenseList');
const saveExpenseBtn = document.getElementById('saveExpenseBtn');
const cancelAddExpenseBtn = document.getElementById('cancelAddExpenseBtn');
const backBtn = document.getElementById('backBtn');
const expensesContainer = document.getElementById('expenses');
const categoryInput = document.getElementById('category');
const amountInput = document.getElementById('amount');

// Show Add Expense Form
addExpenseBtn.addEventListener('click', () => {
    addExpenseForm.classList.remove('hidden');
    expenseList.classList.add('hidden');
});

// Show Expenses List
viewExpensesBtn.addEventListener('click', () => {
    displayExpenses();
    addExpenseForm.classList.add('hidden');
    expenseList.classList.remove('hidden');
});

// Save Expense
saveExpenseBtn.addEventListener('click', () => {
    const category = categoryInput.value.trim();
    const amount = parseFloat(amountInput.value);

    if (category && !isNaN(amount) && amount > 0) {
        expenses.push({ category, amount });
        alert('Expense added!');
        categoryInput.value = '';
        amountInput.value = '';
        addExpenseForm.classList.add('hidden');
        expenseList.classList.remove('hidden');
    } else {
        alert('Please enter valid data.');
    }
});

// Cancel Add Expense
cancelAddExpenseBtn.addEventListener('click', () => {
    categoryInput.value = '';
    amountInput.value = '';
    addExpenseForm.classList.add('hidden');
    expenseList.classList.remove('hidden');
});

// Go back to Menu
backBtn.addEventListener('click', () => {
    addExpenseForm.classList.add('hidden');
    expenseList.classList.add('hidden');
});

// Exit
exitBtn.addEventListener('click', () => {
    window.close(); // Close the window
});

// Display Expenses
function displayExpenses() {
    expensesContainer.innerHTML = '';
    if (expenses.length === 0) {
        expensesContainer.innerHTML = '<li>No expenses yet.</li>';
    } else {
        expenses.forEach(expense => {
            const li = document.createElement('li');
            li.textContent = `Category: ${expense.category} | Amount: $${expense.amount}`;
            expensesContainer.appendChild(li);
        });
    }
}
