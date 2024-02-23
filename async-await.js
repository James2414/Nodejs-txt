const empleados = [
    {
        id: 1,
        nombre: "James"
    },
    {
        id: 2,
        nombre: "Karen"
    },
    {
        id: 3,
        nombre: "Daniel"
    }
];
const salarios = [
    {
        id: 1,
        salario:2900
    },
    {
        id: 2,
        salario: 1500
    }
];


// .Funcion para obtener empleado
const getEmpleado = ( id ) => {
    const promesa = new Promise ((resolve, reject) =>{
        const empleado = empleados.find( e => e.id === id)?.nombre

        if(empleado){
            resolve ( empleado );
        }else {
            reject ( `no se encontro empleado con id ${ id }` );
        }
    });
    
    // .Obligatorio llamada a la promesa
    return promesa;
};

//. Mostrar salario
const getSalario = ((id) => {
    // .Promesa
    const promesaDos = new Promise ((resolve, reject) => {
        const salario = salarios.find( a => a.id === id)?.salario
        if(salario){
            resolve(`su salario es ${ salario }`);
        }else{
            reject `no existe salario con ese id $ { id }`
        }
    });
    return promesaDos;
});



const getInfoUsuario = async ( id ) => {
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id)

        return `el nombre del empleado es ${ empleado }, y su salario es ${ salario }`
    }catch (error){
        throw error;
    }
}

const id = 2
getInfoUsuario( id )
.then ( msg => {
    console.log('todo bien');
    console.log( msg )
})
.catch ( err => {
    console.log('todo va mal')
    console.log( msg )
})
// .Cuando uno pone el async es transformar una funcion para que devuelva una promesa

// .tambien transforma mi funcion en una funcion asincrona

// Await, cuando tengas la respuesta de la promesa lo asignas donde yo quiero que lo asignes