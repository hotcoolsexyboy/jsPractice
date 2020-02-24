"use strict";

let money = prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
  monthlyBudget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income : [],
  savings: false
};

let firstNeeds = prompt(
  'Введите обязательную статью расходов в этом месяце', '');
appData.expenses[firstNeeds] = prompt('Во сколько обойдется?', '');
let secondNeeds = prompt(
  'Введите обязательную статью расходов в этом месяце', '');
appData.expenses[secondNeeds] = prompt('Во сколько обойдется?', '');

let dailyBudget = appData.monthlyBudget / 30;
alert(`Your daily budget is $${dailyBudget}`);
