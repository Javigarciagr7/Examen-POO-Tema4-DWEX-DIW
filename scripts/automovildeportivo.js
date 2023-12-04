import { Vehiculo } from "./vehiculo.js";

export class AutomovilDeportivo extends Vehiculo{

    #potenciamotor;

    constructor(marca,modelo,color,año,cilindrada,potenciamotor){
        super(marca,modelo,color,año,cilindrada,potenciamotor)

        this.#potenciamotor = potenciamotor;
    }

    activarModoDeportivo(){
        const mensaje = `El modo deportivo del coche ha sido activado: ${this.#potenciamotor}`;
        mostrarResultados(`<p>${mensaje}<p/>`);
    }

    get potenciamotor(){
        return this.#potenciamotor 
    }

    set potenciamotor(value){
        this.#potenciamotor = this.#potenciamotor
    }
}