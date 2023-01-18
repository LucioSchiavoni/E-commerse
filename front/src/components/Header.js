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
                <div className="navbar-end space-x-3.5 ">
                    <Link to={'/create'} className="bg-sky-500 hover:bg-sky-700 desktop:h-10 ml-96 mr-8 iphone:mr-20 iphone:h-16 iphone:mb-2" > <b>Crear NFT</b></Link>
                    <ul tabIndex={0} className="flex space-x-3.5">
                        <a className='bg-sky-500 hover:bg-sky-700 text-white iphone:h-18 ' href='/login'><b>Iniciar sesion</b></a>
                        <a className='bg-sky-500 hover:bg-sky-700 text-white iphone:h-10' href='/register'><b>Regisrarse</b></a>
                    </ul>
                </div>
            </div>
        </div >
    )
}


export default Header;