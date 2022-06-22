import React from 'react'

function Banner(props) {
    return (
        <div className='mx-auto space-x-2 p-6 justify-center items-center '>
            <h1 className='text-3xl text-white font-bold'>
                <span className='px-1'>Coffee</span>
                <span className='text-violet-900'>Connoisseur</span>
            </h1>
            <p className='mx-2 text-white'>Discover your local coffe shops!</p>
            <button onClick={props.handleOnClick} className='py-2 px-4 text-white mt-6 bg-violet-800 rounded-md shadow-xl hover:bg-white hover:text-black'>{props.buttonText}</button>
        </div>
    )
}

export default Banner