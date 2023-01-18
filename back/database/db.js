import mongoose from "mongoose"

const url = 'mongodb://127.0.0.1:27017/db_lucio'

mongoose.connect(url)


const db = mongoose.connection

db.on('connected', () => { console.log("Conectado a MongoDB!") })
db.on("error", () => { console.log("Error en la base de datos") })

export default db