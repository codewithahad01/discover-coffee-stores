import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
// import globals from '../styles/globals.css'
import cls from 'classnames'

function Card(props) {
    return (
        
        <div className=' justify-center items-center my-10 mx-10 xl:mx-20'>
            <Link href={props.href} >
                <a>
                    <div className={cls("glass", "p-2 rounded-lg shadow-2xl mx-auto md:")}>
                        <div className='text-2xl text-blue-800 font-bold my-4 md:text-2xl text-center'>
                            <h2>{props.name}</h2>
                        </div>
                        
                        <div className='m-10 rounded-lg flex justify-center items-center'>
                            <Image className='rounded-lg md:w-auto' src={props.imgUrl} alt="header img"  width={460} height={360} />
                        </div>
                    </div>
                </a>
            </Link>

        </div>
    )
}

export default Card