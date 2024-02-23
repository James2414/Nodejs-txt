const saludar = (nombre) => {
    return `me llamo ${nombre}`
}

setTimeout(() => {
    console.log('primer timeot')
}, 200);


console.log (saludar("James"))