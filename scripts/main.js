import { Vehiculo } from "./vehiculo.js";
import { AutomovilDeportivo } from "./automovildeportivo.js";

const contenedorResultado = document.createElement(`div`);
document.body.appendChild(contenedorResultado);

export function mostrarResultado(){
    contenedorResultado.innerHTML += (`<p>${mensaje}<p/>`);
}


const vehiculo1 = new Vehiculo("BMW","CLK","Rojo", 1992, "2400"){
    mostrarResultado('--Vehiculo--');
    vehiculo1.mostrarDatos();
    vehiculo1.arrancar();
    vehiculo1.acelerar(140);
    vehiculo1.frenar();
}

const vehiculoObject{
   
}

localStorage.getItem("vehiculo", JSON.stringify(vehiculoObject));
console.log(localStorage.setItem("vehiculo"));

const automovildeportivo1 = new AutomovilDeportivo("Ferrari","Spider","Amarillo", 2020, "4000", "500"){
    mostrarResultado('--Automovil deportivo--')
    vehiculo1.mostrarDatos();
    vehiculo1.arrancar();
    vehiculo1.acelerar(140);
    vehiculo1.frenar();
}

const deportivoObject{
   
}

localStorage.getItem("automovildeportivo", JSON.stringify(deportivoObject));

localStorage.removeItem(automovildeportivo1.marca);

localStorage.removeItem("color");