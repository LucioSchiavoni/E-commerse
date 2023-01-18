import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import './style.css'


const URI = 'http://localhost:8080/luciodb/'



console.log(axios.isCancel('something'));
const ShowProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProduct()
    }, [])


    //Mostrar entradas
    const getProduct = async () => {
        const res = await axios.get(URI)
        setProducts(res.data)
    }


    //Borrar entrada
    const deleteProduct = async (id) => {
        await axios.delete(`${URI}${id}`)
        getProduct()
    }

    return (
        <div >


            <div className='grid-rows-3'>
                {
                    products.map((product, index) => (
                        <div className="card card-compact w-96 bg-base-100 shadow-xl mt-20 mb-8" key={index}>
                            <img src={`${product.foto}`} alt="foto" />
                            <div className="card-body">
                                <h2 className="card-title text-4xl">{product.nombre}</h2>
                                <p className='text-2xl'>{product.precio}
                                    <b className='text-sm'> ETH</b></p>
                                <div className="card-actions justify-end">
                                    <Link to={`/edit/${product._id}`} className="bg-sky-500 hover:bg-sky-700 text-2xl">Edit</Link>
                                </div>
                                <div className="card-actions justify-end">
                                    <button onClick={() => deleteProduct(product._id)} className="bg-sky-500 hover:bg-sky-700 text-2xl">Borrar</button>
                                </div>
                            </div>

                        </div>
                    ))
                }

            </div>
        </div>
    )


}

export default ShowProducts;


