console.log('Hola mundo');
//SET INTERVAL
//funcion que recive como parametros 
// lo que correrá dentro del bucle
// los ms que demorará en correr cada bucle

let i=0;
setInterval(function(){
    console.log('Sigo activo');
    console.log(i+' segundos');
    i++;
    //forzamos un error
    if(i===5){
        var a= 3+z;
        //aquí se puede ver como el monohilo 
        //puede ser totalmente interrumpido
        //esto es peligroso
    }
}, 1000);

console.log('segunda instrucción') 
// el set interval es asincrono
// por ello segunda instrucción corre aparte y se muestra antes que lo de set
// Sin embargo el error en set intervalo paró todo dsfsd//