(function () {
  'use strict';
}());

let money,
    time,

    startCalcBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesItemInput = document.getElementsByClassName('expenses-item'),
    btnConfirm1 = document.getElementsByTagName('button')[0],
    btnConfirm2 = document.getElementsByTagName('button')[1],
    btnCalculate = document.getElementsByTagName('button')[2],
    optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    checkbox = document.querySelector('#savings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');

startCalcBtn.addEventListener('click', function() {
  time = prompt('Введите дату в формате YYYY-MM-DD', '');
  money = +prompt('Ваш бюджет на месяц?', '');

  while(isNaN(money) || money == null || money == '') {
    money = +prompt('Некорректное значение. Ваш бюджет?');
  }

  appData.monthlyBudget = money;
  appData.timeData = time;

  budgetValue.textContent = money.toFixed();
  year.value = new Date(Date.parse(time)).getFullYear();
  month.value = new Date(Date.parse(time)).getMonth() + 1;
  day.value = new Date(Date.parse(time)).getDate();
});

btnConfirm1.addEventListener('click', function() {
  if(appData.monthlyBudget != null) {
    let sum = 0;

    for(let i = 0; i < expensesItemInput.length; i++){
      let needs = expensesItemInput[i].value,
          costs = expensesItemInput[++i].value;
    
      if((typeof(needs)) === 'string' && needs.length < 10 &&
          costs != null && costs != '' &&
          needs != null && needs != '') {
          console.log('Success!');
          appData.expenses[needs] = costs;
          sum += +costs;
      } else {
          console.log('Error!');
          i--;
      }
    }
    expensesValue.textContent = sum;
  }
});

btnConfirm2.addEventListener('click', function() {
  if(appData.monthlyBudget != null) {
    for(let i = 0; i < optionalexpensesItem.length; i++) {
      appData.optionalExpenses[i] = optionalexpensesItem[i].value;
      optionalexpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
  }
});

btnCalculate.addEventListener('click', function() {
  if(appData.monthlyBudget != null) {
    if(appData.monthlyBudget != null){
      appData.dailyBudget = ((appData.monthlyBudget - expensesValue.textContent) / 30).toFixed(2);
      daybudgetValue.textContent = appData.dailyBudget;

      if(appData.dailyBudget < 34) {
        levelValue.textContent = 'low';
      } else if (appData.dailyBudget >= 34 && appData.dailyBudget < 100) {
        levelValue.textContent = 'medium';
      } else if (appData.dailyBudget > 100) {
        levelValue.textContent = 'high';
      } else {
        levelValue.textContent = 'Cannot calculate. Error!';
      }
    } else {
      daybudgetValue.textContent = 'Cannot calculate. Error!';
      levelValue.textContent = 'Cannot calculate. Error!';
    }
  }
});

chooseIncome.addEventListener('change', function() {
  let items = chooseIncome.value;
  appData.income = items.split(', ');
  incomeValue.textContent = appData.income;
});

checkbox.addEventListener('click', function() {
  if(appData.savings == false) {
    appData.savings = true;
  } else {
    appData.savings = false;
  }
});

chooseSum.addEventListener('input', function() {
  if(appData.savings == true) {
    let sum = +chooseSum.value,
        percent = +choosePercent.value;

    appData.monthIncome = sum / 100 / 12 * percent;
    appData.yearIncome = sum / 100 * percent;

    monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

choosePercent.addEventListener('input', function() {
  if(appData.savings == true) {
    let sum = +chooseSum.value,
        percent = +choosePercent.value;

    appData.monthIncome = sum / 100 / 12 * percent;
    appData.yearIncome = sum / 100 * percent;

    monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

let appData = {
  monthlyBudget: null,
  timeData: null,
  expenses: {},
  optionalExpenses: {},
  income : [],
  savings: false,
};