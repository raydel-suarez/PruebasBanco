Feature: login Functionality
como usuario
quiero iniciar sesion en la pagina demoQA Books de manera satisfactoria

Scenario: login exitoso con credenciales validas
Given Dado que el usuario esta en la pagina correcta
When ingresa el usuario "correcto" y la contraseña "correcta"
and hace click en el boton de login
Then el usuario deberia ser rediridigo correctamente a la pagina principal

Scenario: login fallido con clave invalida
Given Dado que el usuario esta en la pagina correcta
When ingresa el usuario "Correcto" y la contraseña "incorrecta"
and hace click en el boton de login
Then el usuario deberia recibir un mensaje de error indicando que las credenciales son invalidas

Scenario: login fallido con usuario invalido
Given Dado que el usuario esta en la pagina correcta
When ingresa el usuario "incorrecto" y la contraseña "correcta"
and hace click en el boton de login
Then el usuario deberia recibir un mensaje de error indicando que las credenciales son invalidas   