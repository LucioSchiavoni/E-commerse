import React from 'react'
import { useState } from 'react'
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom';

export const Register = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const { signup } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState()

    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value })
    }
    const handleSubmit = async e => {
        e.preventDefault()
        setError('')
        try {
            await signup(user.email, user.password)
            navigate('/')
        } catch (error) {
            console.log(error.code);

            if (error.code === "auth/internal-error") {
                setError("Correo invalido")

            } else if (error.code === "auth/email-already-in-use") {
                setError("Este correo ya fue registrado")
            }
            setError(error.message);
        }
    }
    return (
        <div className='w-full max-w-xs m-auto mt-80'>
            <label className='text-black text-3xl ml-20'>Registrarse</label> <br />
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-6 pb-8 mb-40">
                <div class="mb-4">
                    <label htmlFor='email' className='block text-black text-sm font-fold mb-2'>Email</label>
                    <input type="email" name="email" id="email" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='ej: user@gmail.com' onChange={handleChange} />
                </div>
                <div class="mb-4">
                    <label htmlFor='password' className='block text-black text-sm font-fold mb-2'>Password</label>
                    <input type="password" name='password' id='password' className=' shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' onChange={handleChange} />
                </div>
                <button className='btn btn-primary'>Login</button>
            </form>
        </div>
    )
}

