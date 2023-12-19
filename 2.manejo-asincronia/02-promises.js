//DECLARACION DE FUNCIONES, buena practica
function hola(nombre, miCallback){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("Estoy siendo asincrona");
            console.log("Hola, "+nombre)
            resolve(nombre);
        }, 2000);
    });
}

function adio(nombre){
    return new Promise((resolve, reject) =>{
        setTimeout(function(){
            console.log('Adiooooh', nombre);
            resolve();
        }, 1000);
    });
};

function habla(nombre){
    return new Promise( (resolve,reject) => {
        setTimeout(function() {
            console.log("Bla bla bla...");
            //resolve(nombre);
            reject('hay un error, lo he forzado de la funcion habla')
        }, 1000)
    })

}

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

//...
console.log('Iniciando proceso...')
hola('Oliver')
    .then(habla)
    .then(adio)
    .then((nombre)=> {
        console.log('Terminando el proceso');//comenta linea para ejecutar catch
    })
    .catch(error =>{
        console.error('Hay un erroraso');
        console.error(error);//este error se coje de donde lo ha sacado
    })
