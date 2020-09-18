"use strict";

const newUser = new UserForm ();
 newUser.loginFormCallback = data => ApiConnector.login(data, response => {
     if (response.success) {
          location.reload();
     } else {
          newUser.setloginErrorMessageBox(response.data);
     } 
});
     
newUser.registerFormCallback = data => ApiConnector.register(data, response => {
     if (response.success) {
          location.reload();
     } else {
          newUser.setRegisterErrorMessage(response.data);
     }
});


