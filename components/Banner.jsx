import React from 'react'

function Banner(props) {
    return (
        <div>
            <h1 className='text-5xl text-black font-bold'>
                <span>Coffee</span>
                <span className='text-violet-900 font-semibold'>Connoisseur</span>
            </h1>
            <p>Discover your local coffe shops!</p>
            <button onClick={props.handleOnClick} className='py-2 px-4 text-white bg-violet-800 rounded-md shadow-xl hover:bg-white hover:text-black'>{props.buttonText}</button>
        </div>
    )
}

export default Banner