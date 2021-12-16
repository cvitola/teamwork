import React from 'react'

const Head = ({info}) => {
    return (
        <header className='flex justify-end items-center w-full bg-gradient-to-l from-indigo-500  h-24'>
            <img src="https://img.icons8.com/ios-glyphs/30/000000/user--v1.png"/>
            <p className='p-2 m-2'>{info}</p>
        </header>
            
        
    )
}

export default Head
