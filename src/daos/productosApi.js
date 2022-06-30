import { ApiClass } from "../contenedores/clase.js";

import { createProductsMock } from "../utils/mocks.js";

export class productosApi extends ApiClass {
    constructor() {
        super()
    }

    createAll(cant) {
        let productos = []
        for (let i = 0; i < cant; i++){
           const producto = createProductsMock()
            const prodSaved = this.create(producto) 
            productos.push(prodSaved)
            
        }
        return productos
    }

}

export default productosApi

