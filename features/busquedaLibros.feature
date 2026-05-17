Feature: Busqueda de libros
Como usuario de la plataforma DEMOQA
Quiero poder buscar libros de manera exitosa en la plataforma

Scenario: busqueda de libros exitosa
Given que el usuario se encuentra en la pagina de busqueda de libros
When el usuario ingresa palabra del titulo de un libro en el campo de busqueda
And el usuario hace click en el boton de busqueda
Then el sistema muestra los resultados de la busqueda con los libros que coinciden con la palabra ingresada en el campo de busqueda
And el usuario puede ver los detalles de cada libro en los resultados de la busqueda

Scenario: busqueda de libros sin resultados
Given que el usuario se encuentra en la pagina de busqueda de libros
When el usuario ingresa una palabra que no coincide con ningun libro en el campo de busqueda
And el usuario hace click en el boton de busqueda
Then el sistema muestra un mensaje indicando que no se encontraron resultados para la busqueda realizada
And el usuario no puede ver ningun libro en los resultados de la busqueda   


