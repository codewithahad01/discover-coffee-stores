import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import globals from '../styles/globals.css'

function Card(props) {
    return (
        <div className='flex flex-col justify-center items-center mx-auto my-10 md:grid md:grid-cols-3 md:p-20  '>
            <Link href={props.href} >
                <a>
                    <div className={globals.glass}>
                        <div>
                            <h2>{props.name}</h2>
                        </div>
                        <div>
                            <Image src={props.imgUrl} alt="header img" width={260} height={160} />
                        </div>
                    </div>
                </a>
            </Link>

        </div>
    )
}

export default Card