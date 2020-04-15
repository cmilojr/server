const hbs = require('hbs');
//HELPERS
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
})

hbs.registerHelper('capitalizar', (text) => {
    let palabaras = text.split(' ');
    palabaras.forEach((palabra, id) => {
        palabaras[id] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
    })
    return palabaras.join(' ');
})