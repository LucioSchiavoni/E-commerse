import mongoose from "mongoose";
const Schema = mongoose.Schema


const dbSchema = new Schema(
    {
        nombre: { type: String },

        foto: {
            base64: String,
            imageFormat: String
        },
        precio: { type: Number }

    },
    { collection: 'luciodb' }
)

dbSchema.methods.setFoto = function setFoto(filename) {
    this.foto = `http://localhost:8080/public/${filename} `
}

export default mongoose.model('CrudModel', dbSchema)