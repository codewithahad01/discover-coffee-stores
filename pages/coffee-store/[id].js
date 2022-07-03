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
        <div className=''>
            <Head>
                <title>{name}</title> 
            </Head>
            <div className='container flex flex-col px-7 py-20'>
                <div>
                    <div>
                        <Link href='/'><a className='text-xl font-bold'>Back to home</a></Link>
                    </div>
                    <h1 className='py-6 text-3xl text-white font-bold'>{name}</h1>
                    <Image
                        className='rounded-xl shadow-2xl '
                        src={imgUrl} 
                        alt={name} 
                        width={600} 
                        height={360}
                    ></Image>
                </div>

                <div className={cls('glass', 'rounded-xl shadow-2xl p-4 mt-10 py-8 hover:opacity-90 cursor-pointer')}>
                <div className='flex'>
                    <Image className='' src='/static/icons/places.svg' alt={name} width={24} height={24} ></Image>
                    <p className='font-bold text-xl ml-4'>{address}</p>
                </div>
                    
                <div className='flex mt-4'>
                    <Image src='/static/icons/nearMe.svg' alt={name} width={24} height={24} ></Image>
                    <p className='font-bold text-xl ml-4 '>{neighbourhood}</p>
                </div>

                <div className='flex mt-4'>
                    <Image src='/static/icons/star.svg' alt={name} width={24} height={24} ></Image>
                    <p className='font-bold text-xl ml-4'>1</p>
                </div>

                <button type='button' className='bg-violet-800 text-white font-bold px-10 py-2 rounded-lg shadow-xl my-4 hover:opacity-70' onClick={handleUpvoteButton }>Up votes!</button>

                </div>
            </div>
        </div>
    )
}

export default CoffeeStore