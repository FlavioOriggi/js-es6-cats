// Milestone 1: Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato 
// da: nome, età, colore e sesso.

const gatti = [
    {name: 'Romeo', age:1.6, color:'#3e4649', gender:'male'},
    {name: 'Micia', age:0.8, color:'#ebdece', gender:'female'},
    {name: 'Garfield', age:1.5, color:'#b46329', gender:'male'},
    {name: 'Micietta', age:2.5, color:'#d1d0ce', gender:'female'},
    {name: 'Mario', age:3, color:'#5c5632', gender:'male'},
    {name: 'Gattina', age:4, color:'#0d0805', gender:'female'}
];

gatti.forEach((element) => {
    document.getElementById('container').innerHTML +=
    `
        ${element.name}: <i class="fas fa-cat" style="color:${element.color}"></i>
    `;    
});

// Milestone 2: Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di 
// ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio. 
// Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.
const maleCats = [];
const femaleCats = [];

const pink = '#f0b3d2';
const blue = '#005fd9';

const newGatti = gatti.map((element) => {
    const name = element.name;
    const age = element.age;
    const color = element.color;
    const gender = element.gender;

    let ribbonColor = blue;
    if (gender == 'female'){
        ribbonColor = pink;
    }
       
    const opacity = element.age /4; 
    return {
        name,
        age,
        color,
        gender,
        ribbon : {
            color: ribbonColor,
            opacity : opacity
        }
    }
});