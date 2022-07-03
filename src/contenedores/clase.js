export class ApiClass {
    constructor() {
        this.array = []

    }

    create(obj) {
        let id = this.array.length === 0 ? 1 : this.array[this.array.length-1].id+1
        const newObj = {...obj,id}
        this.array.push(newObj)
        return newObj
    }
    
    getAll() {
        return this.array
    }
    

}

