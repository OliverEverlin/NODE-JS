console.log('Algo');

console.error('Algo');

console.warn('Algo');
//---------------------------------------------------------------
var tabla=[
    {
        a:1,
        b: 'Z'
    },
    {
        a:2,
        b:'Otra letra'
    }
]

console.table(tabla);
//-------------------------------------------------------------
console.group('Conversaciòn: ');
    console.log('Hola');
    console.group('Conversaciòn: ');
        console.log('Blablabla');
        console.log('Adios');
    console.groupEnd('Conversacion');
    console.log('otras cosas de otra conversacion\n\n');

//------------------------------------------------------------------

function f1(){
    console.group('funcion 1');
    console.log('Esto es de la funcion 1');
    console.log('Esto tambien es de la funcion 1');
    f2();
    console.log('hemos vuelto a f1');
    console.groupEnd('funcion 1');//no se ejecuta lo de adentro (...)
}

function f2(){
    console.group('funcion 2');
    console.log('Ahora estamos en la funcion 2');
    console.groupEnd('funcion 2');//no se ejecuta lo de adentro (...)
}

console.log('empezamos');

f1();

console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');
console.count('veces');
console.count('veces');

