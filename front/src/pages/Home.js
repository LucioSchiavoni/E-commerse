import React from 'react'
import ShowProducts from '../components/ShowProducts'
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom'
import '../components/style.css'


export const Home = () => {

    const { user, logout, loading } = useAuth();
    const navigate = useNavigate()
    console.log(user)

    const handleLogout = async () => {
        try {
            await logout()
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    if (loading) return <h2>Cargando...</h2>

    return (
        <div  >
            <div className="avatar shadow-xl ">
                <div className="w-14 rounded ml-10">
                    <img src={user.photoURL} />
                </div>
                <p className='text-black ml-4'>{user.displayName}</p>
                <button className='bg-sky-500 h-10 ml-2 mr-2  ' onClick={handleLogout}>Logout</button>
            </div>

            <ShowProducts />
        </div>
    )
}

export default Home;