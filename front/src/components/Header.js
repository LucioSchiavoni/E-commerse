import React from 'react'

import { Link } from 'react-router-dom';

export const Header = () => {



    return (
        <div>
            <div className="navbar bg-base-100 mb-6 h-20">
                <div className="navbar-start">
                </div>
                <div className="navbar-center">
                    <a href='/' className="btn btn-ghost normal-case text-xl">Inicio
                    </a>
                </div>
                <div className="navbar-end space-x-3.5">
                    <Link to={'/create'} className="bg-sky-500 hover:bg-sky-700 ml-96 mr-8" > <b>Crea tu NFT</b></Link>
                    <ul tabIndex={0} className="flex space-x-3.5">
                        <a className='bg-sky-500 hover:bg-sky-700 text-white ' href='/login'><b>Iniciar sesion</b></a>
                        <a className='bg-sky-500 hover:bg-sky-700 text-white ' href='/register'><b>Regisrarse</b></a>
                    </ul>
                </div>
            </div>
        </div >
    )
}


export default Header;