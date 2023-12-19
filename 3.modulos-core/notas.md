## setInmediate
- Similar a setTimeout(fn, 0): Aunque similar a llamar a setTimeout con un retraso de 0 milisegundos, setImmediate tiene diferencias sutiles. Mientras que setTimeout tiene prioridad sobre las tareas del loop de eventos en la siguiente iteración, setImmediate se ejecuta al mismo tiempo que esas tareas.
- Diferencia con process.nextTick: A diferencia de process.nextTick, que ejecuta la función en la misma iteración del loop de eventos después de la operación actual, setImmediate espera a la siguiente iteración.
- Usos habituales: setImmediate puede ser útil para:
    - Dividir operaciones largas en partes más pequeñas para evitar bloquear el loop de eventos.
    - Devolver un valor de una función asíncrona sin esperar a que se complete otra operación del loop de eventos.
    - Implementar colas de tareas de alta prioridad que necesitan ejecutarse antes de las tareas generales del loop de eventos.

# Console

Con console podemos imprimir todo tipo de valores por nuestra terminal.

    console.log: recibe cualquier tipo y lo muestra en el consola.
    console.info: es equivalente a log pero es usado para informar.
    console.error: es equivalente a log pero es usado para errores.
    console.warn: es equivalente a log pero es usado para warning.
    console.table: muestra una tabla a partir de un objeto.
    console.count: inicia un contador autoincremental.
    console.countReset: reinicia el contador a 0.
    console.time: inicia un cronometro en ms.
    console.timeEnd: Finaliza el cronometro.
    console.group: permite agrupar errores mediante identación.
    console.groupEnd: finaliza la agrupación.
    console.clear: Limpia la consola.
