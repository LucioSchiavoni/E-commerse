import mongoose from "mongoose"

const url = 'mongodb://127.0.0.1:27017/db_lucio'
const MONGODB_URI = "mongodb+srv://lucio:root123@cluster0.uedcvle.mongodb.net/lucio_db"
mongoose.connect(MONGODB_URI)


const db = mongoose.connection

db.on('connected', () => { console.log("Conectado a MongoDB!") })
db.on("error", () => { console.log("Error en la base de datos") })

export default db