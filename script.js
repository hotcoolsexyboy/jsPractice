(function () {
  'use strict';
}());

let money, time;

function start() {
  money = +prompt('Ваш бюджет на месяц?', '');
  time = prompt('Введите дату в формате YYYY-MM-DD', '');

  while(isNaN(money) || money == null || money == '') {
    money = +prompt(
      'Некорректное значение. Введите ваш бюджет на месяц в числовом формате'
      );
  }
}

start();                //function asks money and date

let appData = {
  monthlyBudget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income : [],
  savings: true
};

function chooseExpenses() {
  for(let i = 0; i < 2; i++){
    let needs = prompt('Введите обязательную статью расходов в этом месяце'),
        costs = prompt('Во сколько обойдется?', '');
  
    if((typeof(needs)) === 'string' && needs.length < 10 &&
        costs != null && costs != '' &&
        needs != null && needs != '') {
        console.log('Success!');
        appData.expenses[needs] = costs;
    } else {
        console.log('Error!');
        i--;
    }
  }
}

function detectDayBudget() {
  appData.dailyBudget = (appData.monthlyBudget / 30).toFixed(2);
  alert(`Your daily budget is $${appData.dailyBudget}`);
}

function detectLevel() {
  if(appData.dailyBudget < 34) {
    alert('You have pretty small income.');
  } else if (appData.dailyBudget >= 34 && appData.dailyBudget < 100) {
    alert('You have medium income');
  } else if (appData.dailyBudget > 100) {
    alert('You have high income');
  } else {
    alert('Cannot calculate. Error!');
  }
}

function checkSavings() {
  if(appData.savings) {
    let save = +prompt('Какова сумма накоплений?', ''),
        percent = +prompt('Под какой процент?', '');

    appData.monthIncome = save / 100 / 12 * percent;
    alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
  }
}

function chooseOptExpenses() {
  let optExpenses;
  for(let i = 0; i < 3; i++) {
    optExpenses = prompt('Статья необязательных расходов?');
    appData.optionalExpenses[i] = optExpenses;
  }
}

chooseExpenses();       //function asks about needs and costs
detectDayBudget();      //function calculates money per day
detectLevel();          //function says user's salary level
checkSavings();         //function asks saves and percent
chooseOptExpenses();    //function asks about optional expenses