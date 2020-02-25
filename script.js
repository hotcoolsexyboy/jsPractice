"use strict";

let money = +prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
  monthlyBudget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income : [],
  savings: false
};

for(let i = 0; i < 2; i++){
  let needs = prompt('Введите обязательную статью расходов в этом месяце', ''),
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

appData.dailyBudget = appData.monthlyBudget / 30;
alert(`Your daily budget is $${appData.dailyBudget}`);

if(appData.dailyBudget < 34) {
  alert('You have pretty small income.');
} else if (appData.dailyBudget >= 34 && appData.dailyBudget < 100) {
  alert('You have medium income');
} else if (appData.dailyBudget > 100) {
  alert('You have high income');
} else {
  alert('Cannot calculate. Error!');
}

// let i = 0;
// do {
//   let needs = prompt('Введите обязательную статью расходов в этом месяце', ''),
//       costs = prompt('Во сколько обойдется?', '');  

//   if((typeof(needs)) === 'string' && needs.length < 10 &&
//   costs != null && costs != '' &&
//   needs != null && needs != '') {
//     console.log('Success!');
//     appData.expenses[needs] = costs;
//     i++;
//   } else {
//       console.log('Error!');
//   }  
// } while(i < 2);

// let i = 0;
// while(i < 2) {
//   let needs = prompt('Введите обязательную статью расходов в этом месяце', ''),
//       costs = prompt('Во сколько обойдется?', '');  
  
//   if((typeof(needs)) === 'string' && needs.length < 10 &&
//       costs != null && costs != '' &&
//       needs != null && needs != '') {
//         console.log('Success!');
//         appData.expenses[needs] = costs;
//         i++;
//   } else {
//       console.log('Error!');
//   }  
// }