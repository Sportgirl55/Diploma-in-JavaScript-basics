"use strict";

// Выход из личного кабинета

const logoutButton = new LogoutButton();
logoutButton.action = function () {
     ApiConnector.logout(response => {
          if (response.success) {
               location.reload();
          } 
     });
}

// Получение информации о пользователе

ApiConnector.current(response => {
     if (response.success) {
          ProfileWidget.showProfile(response.data);
     } 
});

// Получение текущих курсов валюты

const ratesBoard = new RatesBoard ();
function getStocks () {   
     ApiConnector.getStocks (response => {
          if (response.success) {
               ratesBoard.clearTable(response.data);
               ratesBoard.fillTable(response.data);
          } 
     })
    
};

getStocks ();

setInterval (getStocks, 60000);


// ОПЕРАЦИИ С ВАЛЮТАМИ


const moneyManager = new MoneyManager ();

// Функция пополнения баланса

moneyManager.addMoneyCallback = function (data) {
     ApiConnector.addMoney(data, response => {
          if (response.success) {
               ProfileWidget.showProfile(response.data);
               moneyManager.setMessage(response, "Баланс пополнен");
          } else {
               moneyManager.setMessage(response.isSuccess, "Ошибка. Баланс не может быть пополнен");
          }
     });
}

// Функция конвертации валюты

moneyManager.conversionMoneyCallback = function (data) {
     ApiConnector.convertMoney(data, response => {
          if (response.success) {
               ProfileWidget.showProfile(response.data);
               moneyManager.setMessage(response, "Конвертация прошла успешно");
          } else {
               moneyManager.setMessage(response.isSuccess, "Ошибка. Конвертация не может быть выполнена");
          }
     });
}

// Функция перевода валюты

moneyManager.sendMoneyCallback = function (data) {
     ApiConnector.transferMoney(data, response => {
          if (response.success) {
               ProfileWidget.showProfile(response.data);
               moneyManager.setMessage(response, "Перевод осуществлен успешно");
          } else {
               moneyManager.setMessage(response.isSuccess, "Ошибка. Перевод не может быть осуществлен");
          }
     });
}

// ОПЕРАЦИИ С ИЗБРАННЫМ

const favoritesWidget = new FavoritesWidget ();

// Вывод списка избранного

     ApiConnector.getFavorites(response => {
          if (response.success) {
               favoritesWidget.clearTable(response.data);
               favoritesWidget.fillTable(response.data);
               moneyManager.updateUsersList(response.data);
          } 
     });

// Добавление пользователя в список избранного

     favoritesWidget.addUserCallback = function (data) {
          ApiConnector.addUserToFavorites (data, response => {
               if (response.success) {
                    favoritesWidget.clearTable(response.data);
                    favoritesWidget.fillTable(response.data);
                    moneyManager.updateUsersList(response.data);
                    favoritesWidget.setMessage(response, "Пользователь успешно добавлен в избранное");
               } else {
                    favoritesWidget.setMessage(response.isSuccess, "Ошибка. Пользователь не может быть добавлен");
               }
     });
}

// Удаление пользователя из списка избранного

     favoritesWidget.removeUserCallback = function (data) {
          ApiConnector.removeUserFromFavorites (data, response => {
               if (response.success) {
                    favoritesWidget.clearTable(response.data);
                    favoritesWidget.fillTable(response.data);
                    moneyManager.updateUsersList(response.data);
                    favoritesWidget.setMessage(response, "Пользователь успешно удален из избранного");
               } else {
                    favoritesWidget.setMessage(response.isSuccess, "Ошибка. Пользователь не может быть удален");
               }
     });
}




