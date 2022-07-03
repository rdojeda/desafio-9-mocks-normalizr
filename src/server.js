import express, { urlencoded } from "express";
import productosRoutes from './routes/productos.js';
import mensajesRoutes from './routes/mensajes.js';
import { normalize, schema, denormalize } from 'normalizr';
import { inspect } from 'util';
import { createMessagesMock } from "./utils/mocks.js";


const app = express();

app.use(express.json())
app.use(urlencoded({ extended: true }));
app.use('/api/productos-test', productosRoutes)
app.use('/api/mensajes-test', mensajesRoutes)

function print(obj) {
  console.log(inspect(obj, {depth: null}))
}

const chatOriginal = {
  id: "1234",
  nombre: "Carlos Gutierrez",
  mensajes: createMessagesMock(),
};

/** Definir schema autor */

const autorSchema = new schema.Entity('autores');

/** Definir schema mensaje */

const mensajeSchema = new schema.Entity('mensajes', {
  id: { type: String },
  autor: autorSchema,
  texto: '',
  timestamp: { type: Number }
});

const chatSchema = new schema.Entity('chats', {
  id: { type: String },
  nombre: '',
  mensajes: [mensajeSchema]
});

/** Normalizar  */
const chatNormalized = normalize(chatOriginal, chatSchema);

print(chatNormalized);

const PORT = 8080;


app.listen(PORT, () => {
  console.log(`Escuchando puerto ${PORT} `);
});

