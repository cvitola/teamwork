import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import teamWork from '../../assets/images/teamwork.jpg'
export const Login = () => {

    const navigate = useNavigate();;
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    
    const onRegister = () => {
        navigate('/register');
    }

    const handleUser = (e) => {
        setUser(e.target.value);
    }

    const handlePassword = (e) =>{
        setPassword(e.target.value);
    }

    const handleSend = () =>{
        if(user ==="" || password ===""){
            setError("Debe completar los campos.");
        }else{
            setError("");
            setUser("");
            setPassword("");
            alert("Llamar al BackEnd");
            navigate('/dashboard', {info: "HMHMHMH"});
            
            }
        }
    return (
        <div className='p-5 m-5 md:flex md:flex-row  md:justify-center md:justify-items-center md:p2 md:m-2'>
            <div className='md:p-2 md:m-2'>
                <h1 className="text-4xl text-white text-center p-2 m-2 title">Iniciar sesión</h1>
                <label className="block min-w-md mx-auto p-1 m-1">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
                        Usuario
                    </span>
                    <input type="text" name="user" value={user} onChange={handleUser} className="mt-1 px-3 py-2 border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
                </label>
        
                <label className="block min-w-md mx-auto p-1 m-1">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
                    Contraseña
                    </span>
                    <input type="password" name="password" value={password} onChange={handlePassword}className="mt-1 px-3 py-2 border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="password" />
                </label>

                <button type="button" className="mt-3 py-3 border border-gray-300 placeholder-gray-400 block w-full sm:text-sm   bg-indigo-500 text-white hover:bg-indigo-800 text-sm font-semibold rounded-md shadow"
                        onClick={handleSend}>
                    Enviar
                </button>
                <span className="text-yellow-500 underline">{error}</span>
                <span className="block text-sm font-medium text-white text-center mt-5">O podes registrarte</span>
                <button type="button" className="mt-3 py-3 border border-gray-300 placeholder-gray-400 block w-full sm:text-sm  bg-green-500 text-white hover:bg-green-800 text-sm font-semibold rounded-md shadow"
                        onClick={onRegister}>
                    Registrate
                </button>
            </div>
            <div className='hidden md:flex md:justify-center md:justify-items-center md:p-2 md:m-2 '>
            <img src={teamWork} alt="teamwork" className='rounded max-w-md'/>
            </div>
        </div>
    )
}
