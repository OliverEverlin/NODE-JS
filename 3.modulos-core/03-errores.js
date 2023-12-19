//CASO SINCRONO.................................................
function otraFuncion() {
    serompe()
}

function serompe() {
    return 3 + z;
}try{
    serompe();
}catch(err){
    console.error('Vaya, algo se ha roto tiooooo...');
    console.error(err.message);
    console.log('pero no pasa nada, lo hemos pillado xd');
}

//otraFuncion();
console.log('esto de aqui va al final');

//continuara... minuto 8:30
//CASO ASINCRONO ...............................................
function seRompeAsincrona(){
    setTimeout(function(){
        return 3+z;
    })
}