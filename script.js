"use strict";

let money = prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
  monthlyBudget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income : [],
  savings: false
};

let needs1 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    costs1 = prompt('Во сколько обойдется?', ''),
    needs2 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    costs2 = prompt('Во сколько обойдется?', '');

appData.expenses[needs1] = costs1;
appData.expenses[needs2] = costs2;

let dailyBudget = appData.monthlyBudget / 30;
alert(`Your daily budget is $${dailyBudget}`);
