//console.log(global);//no se deberia hacer en produccion, es para aprender

//dependendicas circulares, concepto de programaciòn

let i=0;
let intervalo = setInterval(function(){
    console.log('HOla');
    if(i===3)
        clearInterval(intervalo)
    i++;
}, 1000);

//Immediate , recordar con doble m xD
setImmediate(function(){
    console.log('Holaaaaaaaaaaa');
});//se adelanta a lo demás

//require
console.log(process);//brinda un montòn de informaciòn del proceso
console.log(process.i);

console.log(__dirname);//me dice carpeta donde estamos
console.log(__filename);//me dice archivo donde estamos
//tambien se puede crear una variable global

//pero de preferencia no usar variables globales

//creacion de variable global:
globalThis.miVariable = 'elValor';

console.log(miVariable);
