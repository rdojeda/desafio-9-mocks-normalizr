import express from "express";
import productosRoutes from './routes/productos.js'

const app = express();

app.use(express.json())
app.use('/api/productos-test', productosRoutes)


const PORT = 8080;


app.listen(PORT, () => {
  console.log(`Escuchando puerto ${PORT} `);
});

