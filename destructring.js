const coleecion = {
     nombre: 'George',
     apellido: 'Waston',
     edad: 16,
     getNombre(){
        return `${this.nombre}, ${this.apellido}, ${this.edad}`
    }  
}

// . destrucuring

function imprimir ({nombre, apellido, edad}){
    console.log(nombre, apellido, edad)
}
imprimir(coleecion);

// .array

const array = ['dead', 'paul'];
 //  . si quisiramos a dead 

const [h1, h2, h3 ] = array
