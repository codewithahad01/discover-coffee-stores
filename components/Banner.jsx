import React from 'react'

function Banner(props) {
    return (

        <>
            <div className='py-16 md:p-32 lg:p-44 '>
                <h1 className='text-3xl text-white font-bold md:text-5xl lg:text-8xl'>
                    <span className='px-1'>Coffee</span>
                    <span className='text-violet-900 font-extralight'>Connoisseur</span>
                </h1>
                <p className='mx-2 text-white md:text-xl mt-4 lg:text-3xl'>Discover your local coffe shops!</p>
                <button type='botton' onClick={props.handleOnClick} className='focus:outline-black py-2 px-4 text-white mt-6 bg-violet-800 rounded-md shadow-xl hover:bg-white hover:text-black md:text-2xl lg:text-3xl lg:px-8 lg:py-5'>{props.buttonText}</button>
            </div>
        </>
    )
}

export default Banner