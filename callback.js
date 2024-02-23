// .un callback cuando lo escuchemos esque esto se va ejecutar despues de este tiempo

// .esto es un callback
// setTimeout( ()=> {
//     console.log('hola woerd')
// }, 1000);

const getUsuarioId = (id, callback) => {
    const user = {
        id,
        nombre: "Fer"
    }
    setTimeout( () => {
        callback(user)
    },1500)
}

getUsuarioId(10, (usuario) => {
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
});

// .resumen: los callback son solo una funcion que se manda como argumento para que se haga algo con settime despues de tanto tiempo.