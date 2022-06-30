import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
// import globals from '../styles/globals.css'
import cls from 'classnames'

function Card(props) {
    return (
        <div className=' justify-center items-center my-10 mx-4  '>
            <Link href={props.href} >
                <a>
                    <div className={cls("glass", "p-8 rounded-lg shadow-2xl mx-auto md:")}>
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