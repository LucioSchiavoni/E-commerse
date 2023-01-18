import React from 'react'
import { useState } from 'react'
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom';

import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../components/style.css';
export const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    })
    const { login, loginWithGoogle } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState()

    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value })
    }
    const handleSubmit = async e => {
        e.preventDefault();
        setError('');
        try {
            await login(user.email, user.password);
            navigate('/');
        } catch (error) {
            console.log(error.code);
            if (error.code === "auth/internal-error") {
                setError("Correo invalido");
            } else if (error.code === "auth/email-already-in-use") {
                setError("Este correo ya fue registrado");
            }
            setError(error.message);
        }
    }

    const handleGoogleSignin = async () => {
        try {
            await loginWithGoogle();
            navigate('/');
        } catch (error) {
            setError(error.message);
        }
    }
    ///toastify alert
    return (
        <div className='w-full max-w-xs m-auto mt-40'>

            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-6 pb-8 mb-6">
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
            <div className="card w-68 mb-10 bg-base-100 shadow-xl image-full ">
                <figure><img src="https://cdn.vox-cdn.com/thumbor/lL0C2nCqZCRkrvw0wzAN56Fo15U=/0x0:2040x1360/2000x1333/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24016888/STK093_Google_01.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <label className='text-white ml-10 text-2xl mb-10'> <b>Inicia sesion con Google</b> </label>
                    <hr />
                    <div className="card-actions justify-end">
                        <button onClick={handleGoogleSignin} className="btn btn-primary mr-24 w-28 ">  <FontAwesomeIcon icon={faGoogle} /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;