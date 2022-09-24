const account = {
  name: "youssef ahmed",
  expenses: [],
  income: [],
  addIncome: function (description, amount) {
    this.income.push({
      description: description,
      amount: amount,
    });
  },
  addExpense: function (description, amount) {
    this.expenses.push({
      description: description,
      amount: amount,
    });
  },
  getAccountSummary: function () {
    let totalIncome = 0;
    let totalExpenses = 0;

    this.income.forEach(function (income) {
      totalIncome = totalIncome + income.amount;
    });

    this.expenses.forEach(function (expense) {
      totalExpenses = totalExpenses + expense.amount;
    });
    return `${this.name} has a balance of $${
      totalIncome - totalExpenses
    }. $${totalIncome} in income. ${totalExpenses}$ in expenses.`;
  },


};



account.addIncome("bta3 kahoa", 1000);
account.addExpense("bro7 el mdrsa", 900);

console.log(account.getAccountSummary());
