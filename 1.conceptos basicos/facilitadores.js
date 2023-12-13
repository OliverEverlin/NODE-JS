//Nodemon y PM2
//codigo de ejemplo
let nombre = process.env.NOMBRE|| 'Sin nombre';
let web=process.env.WEB || 'no tengo web'; 

console.log("Hola "+ nombre + '\nMi web es: '+ web);

//NODEMON: Diseño
//instalacion: npm install -g nodemon
//correr: nodemon facilitadores.js
//corre mi codigo y vuelve a correr si detecto que hice algún cambio
//aumenta productividad en el diseño de la pagina

//PM2: Producción
//instalación: npm install -g pm2
//correr: pm2 start facilitadores.js
//pm2 status
//pm2 logs, muestra como en nodemon lo que se va corriendo
//pm2 stop, detiene lo que se está corriendo