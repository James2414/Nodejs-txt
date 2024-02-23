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


// .Siempre se llama  ala funcion
const id = 1

getEmpleado(id)

// .El then solo se ejecuta si la promesa se resuelve
    .then( empleado => console.log ( empleado ))
    .catch( err => console.log(err));

// .Llamada a esa funcion de obtener salario de empleados

getSalario(id)

.then ( salario => console.log( salario))
.catch( err => console.log(err))


// .Peticion de el empleado































// ay no Adriana yo ya no voy a seguir con esta bobada de inmaduros hay ay no x , usted vino a medayork iluciono a James jajja cogio y se fue ay no ya no masssssssss... yo bien bonito y estudioso y con estas cosas raras ay noooooo x 