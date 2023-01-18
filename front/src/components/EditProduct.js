import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import axios from 'axios';

console.log(axios.isCancel('something'));

const URI = 'http://localhost:8080/luciodb/'

const EditProduct = () => {
    const [nombre, setNombre] = useState('')
    const [foto, setFoto] = useState('')
    const [precio, setPrecio] = useState('')
    const navigate = useNavigate()
    const { id } = useParams()


    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${URI}${id} `, {
            nombre: nombre,
            foto: foto,
            precio: precio
        })
        navigate('/')
    }

    useEffect(() => {
        getProductById()
    }, [])

    const getProductById = async () => {
        const res = await axios.get(`${URI}${id} `)
        setNombre(res.data.nombre)
        setFoto(res.data.foto)
        setPrecio(res.data.precio)
    }
    return (
        <div className='m-auto max-w-sm mt-60 mb-80 text-black'>
            <h3>Editar</h3><br />
            <form onSubmit={update}>
                <div className="mb-3 ">
                    <label className="form-label">Nombre</label>
                    <input
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Foto</label>
                    <input
                        value={foto}
                        onChange={(e) => setFoto(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Precio</label>
                    <input
                        value={precio}
                        onChange={(e) => setPrecio(e.target.value)}
                        type="number"
                        className="form-control"
                    />
                </div><br />
                <button type="submit" className="btn btn-primary">Actualizar</button>
            </form>
        </div>
    )

}


export default EditProduct;