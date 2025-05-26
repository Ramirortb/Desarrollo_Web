
function operacionAsincrona(callback) {
    setTimeout(() => {
        console.log("Operación completada");
        callback();
    }, 2000);
}

operacionAsincrona(() => {
    console.log("Callback ejecutado");
});

