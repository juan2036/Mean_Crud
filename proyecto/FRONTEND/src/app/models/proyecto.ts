export class Proyecto {

    constructor(_id='', nombre='', apellido='', direccion=''){

        this._id= _id;
        this.nombre= nombre;
        this.apellido= apellido;
        this.direccion= direccion;
    }

    _id: string;
    nombre: string;
    apellido: string;
    direccion: string;
}
