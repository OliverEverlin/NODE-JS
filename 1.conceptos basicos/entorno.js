let nombre = process.env.NOMBRE;
let web=process.env.WEB || 'no tengo web'; 
//valor en caso que no le asigne alguno

//Para correr debo poner en la terminal lo siguiente:
// NOMBRE=Carlos node entorno.js
console.log("Hola "+ nombre + '\nweb: '+ web);//NOMBRE=Carlos WEB=xd node entorno.js (para poner más de una variable de entorno)


//nota: para correr en power shell

//primero definir las variables
//$env:NOMBRE="Carlos"

//luego corro el codigo
//node conceptos/entorno.js