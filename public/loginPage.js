"use strict";


const newUser = new UserForm ();
newUser.loginFormCallback = function (data) {
     ApiConnector.login(data, response => {
          if (response.success) {
               location.reload();
          } else {
          newUser.setLoginErrorMessage(response.error);
          } 
     });
} 

newUser.registerFormCallback = function (data) {
     ApiConnector.register(data, response => {
          if (response.success) {
           location.reload();
          } else {
          newUser.setRegisterErrorMessage(response.error);
          }
     });
}

