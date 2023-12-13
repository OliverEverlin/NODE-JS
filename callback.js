//mi callback es lo que se corre al terminar un "bucle"

//DECLARACION DE FUNCIONES
function hola(nombre, miCallback){
    setTimeout(function(){
        console.log("Estoy siendo asincrona");
        console.log("Hola, "+nombre)
        miCallback(nombre);
    }, 2000);// a pesar que el hola demore más no se adelanta
}

function adio(nombre, otroCallback){
    setTimeout(function(){
        console.log('Adiooooh', nombre);
        otroCallback();
    }, 1000)
}

//COMIENZO CODIGO

console.log('Iniciando proceso...');
//en este caso como callback pongo una funcion 
//que imprime "Terminando proceso..." 

hola("Oliver",
    function(nombre){
        adio(nombre,function(){
            console.log('Terminando proceso...');
        })
});

