//Prefijo async, basta para hacer asincrona una funcion
async function hola(nombre, miCallback){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("Estoy siendo asincrona");
            console.log("Hola, "+nombre)
            resolve(nombre);
        }, 2000);
    });
}

async function adio(nombre){
    return new Promise((resolve, reject) =>{
        setTimeout(function(){
            console.log('Adiooooh', nombre);
            resolve();
        }, 1000);
    });
};

async function habla(nombre){
    return new Promise( (resolve,reject) => {
        setTimeout(function() {
            console.log("Bla bla bla...");
            //resolve(nombre);
            resolve('hay un error, lo he forzado de la funcion habla')
        }, 1000)
    })

}

async function conversacion(nombre, veces, callback){
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
async function main(){
    let nombre = await hola('Oliver');
    await habla();
    await habla();
    await habla();
    await adio(nombre);
    console.log('Terminamos el proceso');
}
console.log('Empezamos el proceso ...');
main();
