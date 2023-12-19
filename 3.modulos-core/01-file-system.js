//const fs = require('01-file-system');

const fs = require('fs');
function leer(ruta, callback){
    //fs.readFileSync 
    //--tambien hay versiòn sincrona pero no es recomendada x que detendrìa producciòn
    fs.readFile(ruta,(err, data) => {
        console.log(data.toString());
    });

}
//probar
//leer(__dirname + '/archivo.txt');

function escribir(ruta, content, callback){
    fs.writeFile(ruta, content, function(err){
        if (err){
            console.error('No he podido escribirlo', err);
        }else{
            console.log('Se ha escrito correctamente');
        }
    })
}
//probar
//escribir(__dirname + '/archivo1.txt', 'Soy un cacahuate!!', console.log)

function borrar(ruta, callback){
    fs.unlink(ruta, callback);
}
borrar(__dirname + '/archivo1.txt', console.log);