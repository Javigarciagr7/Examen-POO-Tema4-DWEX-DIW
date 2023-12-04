import { Vehiculo } from "./vehiculo.js";
import { AutomovilDeportivo } from "./automovildeportivo.js";

const contenedorResultado = document.createElement('div');
document.body.appendChild(contenedorResultado);

export function mostrarResultado(mensaje){
    contenedorResultado.innerHTML += (`<p>${mensaje}</p>`);
}


const vehiculo1 = new Vehiculo("BMW","CLK","Rojo", 1992, "2400")
mostrarResultado(`--------------------Vehiculo--------------------`);
vehiculo1.mostrarDatos();
vehiculo1.arrancar();
vehiculo1.acelerar(140);
vehiculo1.frenar();

const vehiculoObject ={
    marca: 'BMW',
    modelo: 'CLK',
    color:  'Rojo',
    año:    1992,
    fabricacion: '2400'
}

localStorage.setItem("vehiculo", JSON.stringify(vehiculoObject));
console.log(localStorage.getItem("vehiculo"));


const automovildeportivo1 = new AutomovilDeportivo("Ferrari","Spider","Amarillo", 2020, "4000", "500")
mostrarResultado('--------------------Automovil deportivo--------------------')
automovildeportivo1.mostrarDatos();
automovildeportivo1.arrancar();
automovildeportivo1.acelerar(140);
automovildeportivo1.frenar();
automovildeportivo1.activarModoDeportivo();



const deportivoObject ={
    marca: 'Ferrari',
    modelo: 'Spider',
    color:  'Amarillo',
    año:    2020,
    fabricacion: '4000',
    potenciamotor: '500'
}

localStorage.getItem("automovildeportivo", JSON.stringify(deportivoObject));

localStorage.removeItem(automovildeportivo1.marca);

localStorage.removeItem('color');

