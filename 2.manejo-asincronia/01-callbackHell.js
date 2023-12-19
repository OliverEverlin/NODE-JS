//DECLARACION DE FUNCIONES, buena practica
function hola(nombre, miCallback){
    setTimeout(function(){
        console.log("Estoy siendo asincrona");
        console.log("Hola, "+nombre)
        miCallback(nombre);
    }, 2000);
}

function adio(nombre, otroCallback){
    setTimeout(function(){
        console.log('Adiooooh', nombre);
        otroCallback();
    }, 1000)
}

function habla(callbackHablar){
    setTimeout(function(){
        console.log("Bla bla bla...");
        callbackHablar();
    },1000)
}

//Callback Hell, funciona pero mala practica
// console.log('Iniciando proceso...');
// hola("Oliver", function(nombre){
//         habla(function(){
//             habla(function(){
//                 adio(nombre,function(){
//                     console.log('Terminando proceso...');
//                 });
//             });
//         });
// });

//En esta parte del código uso funciones recursivas 
//porque estoy llamando a conversacion dentro de si misma. 
//y mediante un If como estructura de control le digo que 
//cantidad de veces va a  ejectuarse la funcion hablar
function conversacion(nombre, veces, callback){
    //uso de recursividad
    if(veces){
        habla(function(){
            conversacion(nombre, --veces, callback);
        })
    } else {
        adio(nombre,callback);
    }

}


console.log('iniciando proceso...');
hola("Oliver", function(nombre){
    conversacion(nombre, 3, function(){
        console.log("Proceso terminado");
    });
});