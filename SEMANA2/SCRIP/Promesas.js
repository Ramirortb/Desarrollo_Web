
function operacionConPromesa() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Operación completada con éxito");
        }, 2000);
    });
}

operacionConPromesa()
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error));

