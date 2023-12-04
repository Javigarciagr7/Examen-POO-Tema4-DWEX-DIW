
export class Vehiculo{

    #marca;
    #modelo;
    #color;
    #año;
    #cilindrada;

    constructor(marca,modelo,color,año,cilindrada){
        this.#marca = marca;
        this.#modelo = modelo;
        this.#color = color;
        this.#año = año;
        this.#cilindrada = cilindrada;
    }

    mostrarDatos(){

        const datos = `
        La marca del coche es -> ${this.#marca}
        <br>
        Su modelo es -> ${this.#modelo}
        <br>
        Su color es -> ${this.#color}
        <br>
        Se fabricó en el año -> ${this.#año}
        <br>
        Su cilindrada es de -> ${this.#cilindrada}
        `
        mostrarResultados(`<p>${datos}<p/>`);
    }

    acelerar(velocidad){
        const mensaje = `El coche ha acelerado hasta la velocidad: ${velocidad}`;
        mostrarResultados(`<p>${mensaje}<p/>`);
    }

    arrancar(){
        const mensaje = `El coche de marca ${this.#marca} y color ${this.#color} ha arrancado`;
        mostrarResultados(`<p>${mensaje}<p/>`);
    }

    frenar(){
        const mensaje = `El coche de marca ${this.#marca} y color ${this.#color} ha frenado`;
        mostrarResultados(`<p>${mensaje}<p/>`);
    }


    get marca(){
        return this.#marca
    }

    set marca(value){
        this.#marca = marca
    }
    get modelo(){
        return this.#modelo
    }

    set modelo(value){
        this.#modelo = modelo
    }
    get color(){
        return this.#color
    }

    set color(value){
        this.#color = color
    }
    get año(){
        return this.#año
    }

    set año(value){
        this.#año = año
    }
    get cilindrada(){
        return this.#cilindrada
    }

    set cilindrada(value){
        this.#cilindrada = cilindrada
    }
}

