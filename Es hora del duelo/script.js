class TarjetaDeUnidad {
    constructor(nombre, costo, poder, resiliencia) {
        this.nombre = nombre;
        this.costo = costo;
        this.poder = poder;
        this.resiliencia = resiliencia;
    }
    aplicarEfecto(efecto) {
        this.costo -= efecto.costo;
        if (efecto.stat === "poder") {
            this.poder += efecto.magnitud;
        } else if (efecto.stat === "resiliencia") {
            this.resiliencia += efecto.magnitud;
        }
    }
}
class CartaDeEfecto {
    constructor(nombre, costo, texto, stat, magnitud) {
        this.nombre = nombre;
        this.costo = costo;
        this.texto = texto;
        this.stat = stat;
        this.magnitud = magnitud;
    }
}
const ninjaCinturonRojo = new TarjetaDeUnidad("Ninja Cinturón Rojo", 3, 3, 4);
const ninjaCinturonNegro = new TarjetaDeUnidad("Ninja Cinturón Negro", 4, 5, 4);
const algoritmoDificil = new CartaDeEfecto("Algoritmo Difícil", 2, "aumentar la resistencia del objetivo en 3", "resiliencia", 3);
const rechazoDePromesa = new CartaDeEfecto("Rechazo de promesa no manejado", 1, "reducir la resistencia del objetivo en 2", "resiliencia", -2);
const programacionEnPareja = new CartaDeEfecto("Programación en pareja", 3, "aumentar el poder del objetivo en 2", "poder", 2);
// console.log("Turno 1:");
// console.log("El jugador 1 convoca a 'Ninja Cinturón Rojo'");
// console.log(ninjaCinturonRojo);
// console.log("El jugador 1 juega 'Algoritmo Difícil' en 'Ninja Cinturón Rojo'");
// ninjaCinturonRojo.aplicarEfecto(algoritmoDificil);
// console.log(ninjaCinturonRojo);
// console.log("Turno 2:");
// console.log("El jugador 2 convoca a 'Ninja Cinturón Negro'");
// console.log(ninjaCinturonNegro);
// console.log("El jugador 2 juega 'Rechazo de promesa no manejado' en 'Ninja Cinturón Rojo'");
// ninjaCinturonRojo.aplicarEfecto(rechazoDePromesa);
// console.log(ninjaCinturonRojo);
// console.log("Turno 3:");
// console.log("El jugador 1 juega 'Programación en pareja' en 'Ninja Cinturón Rojo'");
// ninjaCinturonRojo.aplicarEfecto(programacionEnPareja);
// console.log(ninjaCinturonRojo);
// console.log("El jugador 1 tiene el ataque 'Ninja Cinturón Rojo' contra 'Ninja Cinturón Negro'");
// const resultado = ninjaCinturonRojo.poder > ninjaCinturonNegro.resiliencia ? "El Ninja Cinturón Rojo gana" : "El Ninja Cinturón Negro sobrevive";
// console.log(resultado);
function convocarUnidad(jugador) {
    const unidad = jugador === 'player1' ? ninjaCinturonRojo : ninjaCinturonNegro;
    document.getElementById(jugador + '-unidad').innerText =
        `${unidad.nombre} (Costo: ${unidad.costo}, Poder: ${unidad.poder}, Resiliencia: ${unidad.resiliencia})`;
}

function jugarEfecto(efectoNombre, jugador) {
    const unidad = jugador === 'player1' ? ninjaCinturonRojo : ninjaCinturonNegro;
    const efecto = efectoNombre === 'algoritmoDificil' ? algoritmoDificil :
        efectoNombre === 'rechazoDePromesa' ? rechazoDePromesa :
            programacionEnPareja;

    unidad.aplicarEfecto(efecto);
    convocarUnidad(jugador);
}

function atacar() {
    const resultado = ninjaCinturonRojo.poder > ninjaCinturonNegro.resiliencia ?
        "El Ninja Cinturón Rojo gana" :
        "El Ninja Cinturón Negro sobrevive";
    document.getElementById('resultado').innerText = resultado;
}
