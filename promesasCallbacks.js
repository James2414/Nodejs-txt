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
]

// .Traer informacion de un empleado con una fun
// const getEmpleado = (id) =>{
//     const empleado = empleados.find(e => e.id ===id)
//     if(empleado){
//         return empleado;
//     }else
//     return `empleado con id ${ id } no existe`
// }

// // .Imprimir empleado
// console.log(getEmpleado(4));


getEmpleado = (id, callback) =>{
    const salario = salarios.find(a => a.id === id)
    if(salario){
        callback (null, salario)
    }else {
       callback `empleado con ese ${ id } no existe`
    }
}
console.log(getEmpleado(1));


// .Null es el primer argumento
