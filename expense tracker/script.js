const expenseForm = document.getElementById('expenseForm');
const expenseList = document.getElementById('expenseList');
let expenses = [];

expenseForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('expenseName').value;
    const amount = document.getElementById('expenseAmount').value;
    const category = document.getElementById('expenseCategory').value;
    const dateTime = document.getElementById('expenseDateTime').value;

    addExpense(name, amount, category, dateTime);
    updateExpenseList();
    expenseForm.reset();
});

function addExpense(name, amount, category, dateTime) {
    expenses.push({ name, amount, category, dateTime });
}

function updateExpenseList() {
    expenseList.innerHTML = '';
    expenses.forEach((expense, index) => {
        const row = document.createElement('tr');
        row.classList.add('fade-in');
        row.innerHTML = `
            <td>${expense.name}</td>
            <td>$${expense.amount}</td>
            <td>${expense.category}</td>
            <td>${formatDateTime(expense.dateTime)}</td>
            <td><button class="delete-btn" onclick="deleteExpense(${index})">Delete</button></td>
        `;
        expenseList.appendChild(row);
    });
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    updateExpenseList();
}

function formatDateTime(dateTime) {
    const date = new Date(dateTime);
    return date.toLocaleString();
}