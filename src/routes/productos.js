import { Router } from 'express'
import productosApi from '../daos/productosApi.js';

const router = Router()
const api = new productosApi()

router.get("/", (req, res) => {
    const allProducts = api.getAll()
    res.json(allProducts)

 });

router.post("/", (req, res) => {
    const { cant } = req.query 
    let max = cant || 50
    let productos = api.createAll(max)
    res.json(productos)
    console.table(productos)
})

export default router
    

    
