import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

console.log(axios.isCancel('something'));

const URI = 'http://localhost:8080/luciodb/'



const CreateProduct = () => {
    const [nombre, setNombre] = useState('')
    const [foto, setFoto] = useState('')
    const [precio, setPrecio] = useState('')
    const navigate = useNavigate()


    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, { nombre: nombre, foto: foto, precio: precio })
        navigate('/')
    }

    return (
        <div>
            <form onSubmit={store} className='m-auto max-w-sm mt-40 mb-80 text-black'  >
                <div className='mb-3'>
                    <label className='form-label'>Nombre</label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} className='form-control' />
                    <label className='form-label'>Foto</label>
                    <input type="file" value={foto} onChange={(e) => setFoto(e.target.value)} className='form-control' />
                    <label className='form-label'>Precio</label>
                    <input type="number" value={precio} onChange={(e) => setPrecio(e.target.value)} className='form-control' />

                </div>
                <button type='submit' className='btn btn-primary'>Guardar</button>

            </form>
        </div>
    )
}

export default CreateProduct;