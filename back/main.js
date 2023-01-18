import express from 'express';
import routes from './routes/routes.js';
import db from "./database/db.js"
import bodyParser from 'body-parser'
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
const PORT = 8080;

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/public', express.static(`${__dirname}/storage`))
app.use('/luciodb', routes)


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}/ `)
})