import React from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'

const CoffeeStore = () => {
    const router = useRouter()
    
    return (
        <div>
            <h1 className='text-4xl'>Coffee Store {router.query.id}</h1>
            <Link href='/'><a className='text-4xl underline'>Back to home</a></Link>
            <Link href='/coffee-store/dynamic'><a className='text-4xl underline'>go to page dynamic     </a></Link>
        </div>
    )
}

export default CoffeeStore