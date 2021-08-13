

/*
    ===== Código de TypeScript =====
*/
let habilidades: string[] = ['bash', 'Counter', 'Healing'];


interface personaje {
nombre: string;
hp: number;
habilidades: string[];
puebloNatal?: string;
}


const personaje: personaje = {

    nombre: 'Strider',
    hp: 100,
    habilidades: ['bash', 'Counter', 'Healing']
}


personaje.puebloNatal = 'Pueblo Paleta';

console.table(personaje);
