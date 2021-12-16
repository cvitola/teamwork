import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Register = () => {

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [apodo, setApodo] = useState("");
    const [mail, setMail] = useState("");
    const [born, setBorn] = useState("");
    const [error, setError] = useState("");

    const handleName = (e) =>{
        setName(e.target.value);
    }

    const handleApodo = (e) => {
        setApodo(e.target.value);
    }

    const handleMail = (e) =>{
        setMail(e.target.value);
    }

    const handleBorn = (e) => {
        setBorn(e.target.value)
    }
    const onLogin = () =>{
        navigate('login');
    }

    const onRegister = () =>{
        if(name==="" || apodo ==="" || mail ==="" || born ===""){
            setError("Debe completar los campos.");
        }else{
            setError("");
            setName("");
            setApodo("");
            setBorn("");
            setMail("");
            alert("Llamar al BackEnd");
        }
    }
    return (
        <div className='md:px-40 m-3'>
            <h1 className="text-4xl text-white text-center p-2 m-2 title">Registrate</h1>
            <label className="block min-w-md mx-auto p-1 m-1">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
                    Nombre
                </span>
                <input type="text" name="name" value={name} onChange={handleName} className="mt-1 px-3 py-2 border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Juan" />
            </label>
                
            <label className="block min-w-md mx-auto p-1 m-1">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
                    Apodo
                </span>
                <input type="text" name="apodo" value={apodo} onChange={handleApodo} className="mt-1 px-3 py-2 border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="juanchi" />
            </label>   

            <label className="block min-w-md mx-auto p-1 m-1">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
                    Correo electrónico
                </span>
                <input type="text" name="mail" value={mail} onChange={handleMail} className="mt-1 px-3 py-2 border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
           </label>      

            <label className="block min-w-md mx-auto p-1 m-1">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
                    Fecha Nacimiento
                </span>
                <input type="date" name="born" value={born} onChange={handleBorn} className="mt-1 px-3 py-2 border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
            </label>         

            <button type="button" className="mt-3 py-3 border border-gray-300 placeholder-gray-400 block w-full sm:text-sm   bg-indigo-500 text-white hover:bg-indigo-800 text-sm font-semibold rounded-md shadow"
                    onClick={onRegister}>
                Registrarse
            </button>     
            <span className="text-yellow-500 underline">{error}</span>                  

            <button type="button" className="mt-3 py-3 border border-gray-300 placeholder-gray-400 block w-full sm:text-sm   bg-green-500 text-white hover:bg-green-800 text-sm font-semibold rounded-md shadow"
                    onClick={onLogin}>
                Cancelar
            </button>           
        </div>
    )
}
