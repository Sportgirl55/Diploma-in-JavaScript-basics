"use strict";

const logoutButton = new LogoutButton();
logoutButton.action = function () {
     ApiConnector.logout(response => {
          if (response.success) {
               location.reload();
          } 
     });
}


ApiConnector.current(response => {
     if (response.success) {
          ProfileWidget.showProfile(response.data);
     } 
});


const ratesBoard = new RatesBoard ();
     ratesBoard.getStocks = function () {
          Apiconnector.getStocks (response => {
               if (response.success) {
                    ratesBoard.clearTable(response.data);
                    ratesBoard.fillTable(response.data);
               } 
          })
     };

const moneyManager = new MoneyManager ();
moneyManager.addMoneyCallback = function (data) {
     Apiconnector.addMoney(response => {
          if (response.success) {
               moneyManager.showProfile(response.data);
          } 
     });
}









// Реализуйте пополнение баланса:
// Запишите в свойство addMoneyCallback функцию, которая будет выполнять запрос.
// Внутри функции выполните запрос на пополнение баланса (addMoney).
// Используйте аргумент функции свойства addMoneyCallback для передачи данных data в запрос.
// После выполнения запроса выполните проверку успешности запроса.
// В случае успешного запроса отобразите в профиле новые данные о пользователе из данных ответа от сервера (showProfile).
// Также выведите сообщение об успехе или ошибку (причину неудачного действия) пополнении баланса в окне отображения сообщения (setMessage).


