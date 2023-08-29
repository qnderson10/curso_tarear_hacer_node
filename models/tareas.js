/**
 * clase coleccion de objetos tarea
 * _listado:
 *  {'uuid-1212-1212-2': { id: 12, desc: asasd, completadoEn: 213213(fecha)}}
 * Se creo la funcion crearTarea para meterla en el objeto de tareas
 * 
 * 
 */

const Tarea = require("./tarea");
require('colors');

class Tareas {
    _listado = {};

    // Getter que convierte el arreglo de objetos de tareas a un arreglo de tareas
    get listadoArr() {
        const listado = [];
        // Funcion que obtiene las llaves de los objetos que retorna un arreglo de string
        // Con las llaves que se retornan mediante el foreach se identifican las tareas instaciadas
        // en el arreglo de objetos y se agregan al nuevo arreglo
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        });

        return listado;
    }

    constructor(){
        this._listado = {};
    }

    // Con esta funcion se tiene el arreglo y se transforma de nuevo a objeto
    cargarTareasFromArray(tareas = []) {
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        });
    }

    crearTarea(desc = ''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }
    
    listadoCompleto() {
        // Esta es la forma que hice
        // let lista = ``;
        // let id = 1;
        // let estado = '';
        // Object.keys(this._listado).forEach(key => {
        //     const tarea = this._listado[key];
        //     if (tarea.completadoEn) {
        //         estado = 'Completada'.green
        //     }
        //     else {
        //         estado = 'Pendiente'.red
        //     }
        //     lista = `${lista} \n ${(id + '. ').green} ${this._listado[key].desc} | ${estado}`;
        //     id += 1;
        // });
        
        // console.log(lista);

        this.listadoArr.forEach((tarea, i) => {
            const idx = `${i + 1}.`.green;
            const {desc, completadoEn} = tarea;
            const estado = (completadoEn)
                            ? 'Completada'.green
                            : 'Pendiente'.red
            console.log(`${idx} ${desc} :: ${estado}`);
        });
    }

}

module.exports = Tareas;