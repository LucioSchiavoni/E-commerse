import CrudModel from "../models/CrudModel.js";
//Mostrar todos
export const getAllEntry = async (req, res) => {
    try {
        const entrys = await CrudModel.find()
        res.status(200).json(entrys)
        try {
            if (req.file) {
                const { filename } = req.file
                CrudModel.setFoto(filename)
            }
        } catch (error) {
            console.log(error)
        }
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Mostar
export const getEntry = async (req, res) => {
    try {
        const id = req.params.id;
        await CrudModel.findById({ _id: id }).then((entry) => {
            res.status(200).json(entry)
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Crear
export const createEntry = async (req, res) => {
    try {
        await CrudModel.create(req.body)
        res.status(200).json({
            "message": "Blog creado correctamente"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Actualizar
export const updateEntry = async (req, res) => {
    try {
        const id = req.params.id;
        await CrudModel.updateOne({ _id: id }, req.body).then(res => {
            console.log(res)
        })
        res.status(200).json({
            "message": "Se actualizo correctamente"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Eliminar
export const deleteEntry = async (req, res) => {
    try {
        const id = req.params.id;
        await CrudModel.deleteOne({ _id: id }).then(res => {
            console.log(res)
        })
        res.status(200).json({
            "message": "Se elimino correctamente"
        })
    } catch (error) {
        res.json({ message: error.message })
    }


}