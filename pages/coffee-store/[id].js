import React from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
import CoffeeStoresData from '../../data/coffee-stores.json'
import Head from 'next/head'
import Image from 'next/image'
import cls from 'classnames'

export function getStaticProps(staticProps) {
    const params = staticProps.params
    return {
        props: {
            CoffeeStore: CoffeeStoresData.find(CoffeeStore => {
                return CoffeeStore.id.toString( ) === params.id
            }),
        }
    }
}

export function getStaticPaths() {
    const paths = CoffeeStoresData.map(coffeeStore => {
        return {
            params: {
                id: coffeeStore.id.toString(),
            }
        }
    })
    return {
        paths: paths, 
        fallback: true,
    }
}

const CoffeeStore = (props) => {
    const router = useRouter()

    if(router.isFallback) {
        return <div className='text-xl md:text-2xl'> Loading... </div>
    }

    const {address, name, neighbourhood, imgUrl} = props.CoffeeStore

    const handleUpvoteButton = () => {
        console.log('heyyy iam up voted')
    }
    
    return (
        <div className='md:mt-20'>
            <Head>
                <title>{name}</title> 
            </Head>
            <div className=' px-7 py-20 lg:flex  lg:justify-center lg:items-center'>
                <div className='md:p-20'>
                    <div>
                        <Link href='/'><a className='text-xl font-bold lg:text-2xl '>Back to home</a></Link>
                    </div>
                    <h1 className='py-6 text-3xl text-white font-bold md:text-4xl lg:text-5xl'>{name}</h1>
                    <Image
                        className='rounded-xl shadow-2xl'
                        src={imgUrl} 
                        alt={name} 
                        width={800} 
                        height={560}
                    ></Image>
                </div>

                <div className={cls('glass', ' rounded-xl shadow-2xl p-4 mt-10 py-8 hover:opacity-90 cursor-pointer  lg:px-36  lg:pl-10 ')}>
                <div className='flex'>
                    <Image className='lg:m-4 ' src='/static/icons/places.svg' alt={name} width={24} height={24} ></Image>
                    <p className='font-bold text-xl ml-4 md:text-xl lg:text-xl xl:text-3xl'>{address}</p>
                </div>
                    
                <div className='flex mt-4'>
                    <Image src='/static/icons/nearMe.svg' alt={name} width={24} height={24} ></Image>
                    <p className='font-bold text-xl ml-4 md:text-xl lg:text-xl xl:text-3xl'>{neighbourhood}</p>
                </div>

                <div className='flex mt-4'>
                    <Image src='/static/icons/star.svg' alt={name} width={24} height={24} ></Image>
                    <p className='font-bold text-xl ml-4 md:text-xl lg:text-xl xl:text-3xl'>1</p>
                </div>

                <button type='button' className='bg-violet-800 text-white font-bold px-10 py-2 rounded-lg shadow-xl my-4 hover:opacity-70 md:px-10 md:text-xl lg:text-xl' onClick={handleUpvoteButton }>Up votes!</button>

                </div>
            </div>
        </div>
    )
}

export default CoffeeStore