
async function operacionAsync() {
    try {
        let resultado = await operacionConPromesa();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}

operacionAsync();

